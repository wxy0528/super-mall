<template>
  <div id="home" class="wrapper">
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
    </NavBar>
    <TabControl
      :title="['流行','新款','精选']"
      class="tab-control tab-control-top"
      @tabClick="tabClick"
      ref="TopTabControl"
      v-show="isTabFixed"
    ></TabControl>
    <Scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="scrollPosition"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in list" :key="index">
          <img :src="item.image" class="banner-img" @load="SwipeImgLoad" />
        </van-swipe-item>
      </van-swipe>
      <Recomend :recomend="recomend"></Recomend>
      <featureview></featureview>
      <TabControl
        :title="['流行','新款','精选']"
        class="tab-control"
        @tabClick="tabClick"
        ref="tabControl"
      ></TabControl>
      <GoodsList :goods="showGoods"></GoodsList>
    </Scroll>
    <BackTop @click.native="backClick" v-show="ishowbackTop"></BackTop>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/TabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Recomend from "./childrencoponents/homerecomend";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/backTop";

import featureview from "./childrencoponents/featureview";
import "assets/css/base.css";

import { getHomeMultidata, getHomeGoods } from "network/home";
import { debounce } from "components/common/utils.js";
export default {
  data() {
    return {
      list: [],
      recomend: [],
      goods: {
        pop: {
          page: 0,
          list: []
        },
        new: {
          page: 0,
          list: []
        },
        sell: {
          page: 0,
          list: []
        }
      },
      // 默认选中流行
      currentKey: "pop",
      // 默认显示返回顶部
      ishowbackTop: false,
      // 距离顶部多少
      tabOffsetTop: 609,
      // 图片加载只调用一次
      isload: false,
      isTabFixed: false,
      saveY: 0,
      // 图片监听事件名
      itemLImgListener: null
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentKey].list;
    }
  },
  components: {
    NavBar,
    TabControl,
    Recomend,
    featureview,
    GoodsList,
    Scroll,
    BackTop
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata();
    // 2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    // 网络请求相关方法
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.list = res.data.data.banner.list;
        this.recomend = res.data.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      var page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // console.log(res.data.data.list);
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
        // 完成上拉加载更多(this.$refs.scroll:通过$refs找到对应的dom节点,也就是找到scroll.vue中,在调用finishPullUp这个方法)
        this.$refs.scroll.finishPullUp();
      });
    },
    // tab栏切换（字传父）
    tabClick(index) {
      console.log(index)
      switch (index) {
        case 0:
          this.currentKey = "pop";
          break;
        case 1:
          this.currentKey = "new";
          break;
        case 2:
          this.currentKey = "sell";
          break;
      }
      console.log(this.$refs.TopTabControl.currentIndex)
      
      this.$refs.TopTabControl.currentIndex = index;
      this.$refs.tabControl.currentIndex = index;
    },
    scrollPosition(position) {
      // console.log(position)
      // 1.判断backTop是否显示
      if (position.y < -1000) {
        this.ishowbackTop = true;
      } else {
        this.ishowbackTop = false;
      }
      // 2.决定tabcontrol是否吸顶
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },
    // 加载更多
    loadMore() {
      // console.log("上拉加载更多");
      this.getHomeGoods(this.currentKey);
      // refresh:重新计算 better-scroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常
      // this.$refs.scroll.scroll.refresh();
    },

    //调用
    backClick() {
      // x,y,毫秒数(调用子组件的scrollTo方法)
      this.$refs.scroll.scrollTo(0, 0, 300);
    },
    // 监听轮播图加载完后
    SwipeImgLoad() {
      if (!this.isload) {
        // console.log(this.$refs.tabControl.$el.offsetTop);
        this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
        this.isload = true;
      }
    }
  },
  mounted() {
    // 1.图片加载完的事件监听
    // 防抖函数返回的值用refresh接收
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    // 监听GoodListitem图片加载完成
    this.itemLImgListener = () => {
      () => {
        // 调用Scroll.vue的refresh()方法
        // this.$refs.scroll.refresh()
        // 直接调用 const refresh
        refresh();
      };
    };
    this.$bus.$on("itemImgLoad", this.itemLImgListener)
      // 获取tabcontrol的offsettop值
      // 所有的组件都有一个$el:用于获取组件中的元素
      // console.log(this.$refs.tabControl.$el.offsetTop);
    // this.tabOffsetTop = this.$refs.tabControl.offsetTop()
  },
  destroyed() {
    console.log("home destroyed");
  },
  // 离开时触发的函数
  deactivated() {
    // 1.取消全局变量的监听
    this.$bus.$off("itemImgLoad", this.itemLImgListener);
  },
  // 进来时触发的函数
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  }
};
</script>

<style  scoped>
#home {
  /* padding: 44px 0 50px; */
  position: relative;
  padding-top: 44px;
  height: 100vh;
}
.home-nav {
  background: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
}

.banner-img {
  width: 100%;
}
.tab-control {
  /* 吸顶效果 */
  /* position: sticky;
  top: 44px;
  background: #fff; */
}
.tab-control-top {
  position: relative;
  z-index: 9;
  background: #fff;
}
.content {
  /* height: 300px; */
  /* overflow: hidden; */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>