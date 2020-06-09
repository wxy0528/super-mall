<template>
  <div id="home" class="wrapper">
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
    </NavBar>
    <Scroll class="content" ref="scroll" 
    :probe-type="3" 
    @scroll="scrollPosition"
    :pull-up-load="true"
    @pullingUp="loadMore"
    >
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in list" :key="index">
          <img :src="item.image" class="banner-img" />
        </van-swipe-item>
      </van-swipe>
      <Recomend :recomend="recomend"></Recomend>
      <featureview></featureview>
      <TabControl :title="['流行','新款','精选']" class="tab-control" @tabClick="tabClick"></TabControl>
      <GoodsList :goods="showGoods"></GoodsList>
    </Scroll>
    <BackTop @click.native="backClick" v-show="ishowbackTop"></BackTop>
    <!-- <ul>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
    </ul>-->
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
      curreyItem: "pop",
      // 默认显示返回顶部
      ishowbackTop:false

    };
  },
  computed: {
    showGoods() {
      return this.goods[this.curreyItem].list;
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
      });
    },
    // tab栏切换（字传父）
    tabClick(index) {
      switch (index) {
        case 0:
          this.curreyItem = "pop";
          break;
        case 1:
          this.curreyItem = "new";
          break;
        case 2:
          this.curreyItem = "sell";
          break;
      }
    },
    scrollPosition(position){
      // console.log(position)
      if(position.y<-1000){
        this.ishowbackTop=true
      }else{
        this.ishowbackTop=false
      }
    },
    // 加载更多
    loadMore(){
      // console.log("上拉加载更多")
      this.getHomeGoods(this.curreyItem)
      // refresh:重新计算 better-scroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常
      this.$refs.scroll.scroll.refresh();
    },

    //调用
    backClick() {
      // x,y,毫秒数(调用子组件的scrollTo方法)
      this.$refs.scroll.scrollTo(0, 0,300);
    },
    //
    
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
  position: sticky;
  top: 44px;
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