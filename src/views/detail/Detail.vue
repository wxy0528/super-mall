<template>
  <div class="detail">
    <DetailNavBar></DetailNavBar>
    <!-- <h2>{{id}}</h2> -->
    <Scroll class="content">
      <van-swipe :autoplay="3000" class="detail-bar" indicator-color="#ff66ee">
        <van-swipe-item v-for="(item, index) in imgTop" :key="index">
          <img :src="item" class="banner-img" />
        </van-swipe-item>
      </van-swipe>
      <DetailBaseInfo :goods="goodsInfo"></DetailBaseInfo>
      <DetailShopInfo :shop="shopInfo"></DetailShopInfo>
      <DetailImageInfo :detailInfo="detailInfo"></DetailImageInfo>
      <DetailParamsInfo :paramsInfo="itemParams"></DetailParamsInfo>
    </Scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childcomponents/DetailNavBar";
import DetailBaseInfo from "./childcomponents/DetailBaseInfo";
import DetailShopInfo from "./childcomponents/DetailShopInfo"
import DetailImageInfo from "./childcomponents/DetailImageInfo"
import DetailParamsInfo from './childcomponents/DetailParamsInfo'
import Scroll from "components/common/scroll/Scroll";
import { getdetail, Goods } from "network/detail.js";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailBaseInfo,
    Scroll,
    DetailShopInfo,
    DetailImageInfo,
    DetailParamsInfo
  },
  props: {},
  data() {
    return {
      id: null,
      // 轮播
      imgTop: [],
      // 商品标题内容
      goodsInfo: {},
      // 店铺信息
      shopInfo:{},
      // 图片详情
      detailInfo:{},
      // 参数
      itemParams:{},
      // 评论
      commentInfo:{},
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {
    // 1.获取iid
    // console.log(this.$route.params.iid);
    this.id = this.$route.params.iid;
    // 2.请求数据
    getdetail(this.id).then(res => {
      console.log(res.data);
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
      this.shopInfo=data.shopInfo
      // 6.取出详情信息
      this.detailInfo=data.detailInfo
      // 7.取出参数信息
      this.itemParams=data.itemParams
    });
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
.content{
  background: #fff;
  height: calc(100% - 44px);
}
</style>