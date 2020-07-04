<template>
  <div class="detail">
    <DetailNavBar @titleClick="barClick" ref="nav"></DetailNavBar>
    <!-- <h2>{{id}}</h2> -->
    <Scroll class="content" ref="scroll" @scroll="contentScroll" :probeType="3">
      <van-swipe :autoplay="3000" class="detail-bar" indicator-color="#ff66ee">
        <van-swipe-item v-for="(item, index) in imgTop" :key="index">
          <img :src="item" class="banner-img" />
        </van-swipe-item>
      </van-swipe>
      <DetailBaseInfo :goods="goodsInfo"></DetailBaseInfo>
      <DetailShopInfo :shop="shopInfo"></DetailShopInfo>
      <DetailImageInfo :detailInfo="detailInfo" @loadImgEvent="loadEvent"></DetailImageInfo>
      <DetailParamsInfo :paramsInfo="itemParams" ref="params"></DetailParamsInfo>
      <DetailCommentInfo :commentInfo="commentInfo" ref="comment"></DetailCommentInfo>
      <goodList :goods="goods" ref="list"></goodList>
    </Scroll>
    <BackTop @click.native="backClick" v-show="ishowbackTop"></BackTop>
    <DetailBottomBar></DetailBottomBar>
  </div>
</template>

<script>
import DetailNavBar from "./childcomponents/DetailNavBar";
import DetailBaseInfo from "./childcomponents/DetailBaseInfo";
import DetailShopInfo from "./childcomponents/DetailShopInfo";
import DetailImageInfo from "./childcomponents/DetailImageInfo";
import DetailParamsInfo from "./childcomponents/DetailParamsInfo";
import DetailCommentInfo from "./childcomponents/DetailCommentInfo";
import goodList from "components/content/goods/GoodsList";
import DetailBottomBar from './childcomponents/DetailBottomBar';
import BackTop from "components/content/backTop/backTop";

import Scroll from "components/common/scroll/Scroll";
import { getdetail, Goods, getRecommend } from "network/detail.js";
import { debounce } from "components/common/utils.js";
import { itemListenerMixin } from "components/common/mixin.js";       
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailBaseInfo,
    Scroll,
    DetailShopInfo,
    DetailImageInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    goodList,
    DetailBottomBar,
    BackTop
  },
  props: {},
  mixins: [itemListenerMixin],
  data() {
    return {
      id: null,
      // 轮播
      imgTop: [],
      // 商品标题内容
      goodsInfo: {},
      // 店铺信息
      shopInfo: {},
      // 图片详情
      detailInfo: {},
      // 参数
      itemParams: {},
      // 评论
      commentInfo: {},
      //
      goods: [],
      itemLImgListener: null,
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0,
      // 默认显示返回顶部
      ishowbackTop: false,
    };
  },
  watch: {},
  computed: {},
  methods: {
    // 监听图片加载完成
    loadEvent() {
      // console.log("++++")
      this.$refs.scroll.refresh();
    },
    // 标题切换
    barClick(index) {
      // console.log(
      //   this.$refs.params.$el.offsetTop,
      //   this.$refs.comment.$el.offsetTop,
      //   this.$refs.list.$el.offsetTop
      // );
      // console.log(index);
      this.currentIndex=index
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100);
    },
    // 监听滚动位置
    contentScroll(position) {
      // console.log(position);
      // 1.获取y值(position.y为负值)
      const positionY = -position.y;
      // 2.给positionY和主题中的值进行对比([0,9331,10083,10386,Number.MAX_VALUE])
      let length = this.themeTopYs.length;
      // console.log(this.themeTopYs)
      for (let i = 0; i < length - 1; i++) {
        
        if (
          this.currentIndex !== i &&
          (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1])
        ) {
          console.log(i)
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }

      // 2. 判断backTop是否显示
      if (position.y < -1000) {
        this.ishowbackTop = true;
      } else {
        this.ishowbackTop = false;
      }
      
      // console.log(this.$refs.nav.currentIndex)
    },
    //调用
    backClick() {
      // x,y,毫秒数(调用子组件的scrollTo方法)
      this.$refs.scroll.scrollTo(0, 0, 300);
    },
  },
  created() {
    // 给getThemeTopY赋值(给getThemeTopY进行防抖操作)第一次进入时值不对
    this.getThemeTopY = debounce(() => {
      this.themeTopYs = [];
      // 商品
      this.themeTopYs.push(0);
      // 参数
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      // 评论
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      // 推荐
      this.themeTopYs.push(this.$refs.list.$el.offsetTop);
      this.themeTopYs.push(Number.MAX_VALUE);
      // console.log(this.themeTopYs);
    }, 100);
  },
  mounted() {
    // 1.获取iid
    // console.log(this.$route.params.iid);
    this.id = this.$route.params.iid;
    // 2.请求数据
    getdetail(this.id).then(res => {
      // console.log(res.data);
      // 获取数据
      const data = res.data.result;
      // 3.取出轮播图数据
      this.imgTop = data.itemInfo.topImages;
      // 4.创建商品的对象
      this.goodsInfo = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 5.取出店铺信息
      this.shopInfo = data.shopInfo;
      // 6.取出详情信息
      this.detailInfo = data.detailInfo;
      // 7.取出参数信息
      this.itemParams = data.itemParams;
      // 8.取出评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
      // 异步更新队列
      this.$nextTick(() => {
        // 获取组件中的offsetTop(等图片加载完成才能得到$el中的值)

        this.themeTopYs = [];
        // 商品
        this.themeTopYs.push(0);
        // 参数
        this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        // 评论
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        // 推荐
        this.themeTopYs.push(this.$refs.list.$el.offsetTop);
        // console.log(this.themeTopYs);
      });
    });

    //3.请求推荐数据
    getRecommend().then(res => {
      // console.log(res);
      this.goods = res.data.data.list;
    });

    //4.监听点击图片事件
    let newfresh = debounce(this.$refs.scroll.refresh, 100);
    this.itemLImgListener = () => {
      newfresh();
      this.getThemeTopY();
    };
    this.$bus.$on("itemImgLoad", this.itemLImgListener);
  },
  destroyed() {
    // console.log('1233')
    this.$bus.$off("itemImgLoad", this.itemLImgListener);
  }
};
</script>
<style  scoped>
.detail {
  height: 100vh;
  position: relative;
  z-index: 3;
  background: #fff;
}
.detail-bar {
  width: 100%;
  height: 300px;
  overflow: hidden;
}
.content {
  background: #fff;
  height: calc(100% - 44px - 2.09rem);
}
</style>