<template>
  <div class="home">
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
    </NavBar>
    <!-- <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe> -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item, index) in list" :key="index">
        <img  :src="item.image" class="banner-img">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import "assets/css/base.css";
import { getHomeMultidata } from "network/home";
export default {
  data() {
    return {
      list: [],
    //   images: [
    //     "https://img.yzcdn.cn/vant/apple-1.jpg",
    //     "https://img.yzcdn.cn/vant/apple-2.jpg"
    //   ]
    };
  },
  components: {
    NavBar
  },
  created() {
    getHomeMultidata().then(res => {
      console.log(res);
      console.log(res.data.data.banner);
      this.list = res.data.data.banner.list;
      console.log(this.list);
    });
  }
};
</script>

<style  scoped>
.home-nav {
  background: var(--color-tint);
  color: #fff;
}
/* .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  } */
.banner-img{
    width: 100%;
  }
</style>