<template>
  <div class="home">
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
    </NavBar>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item, index) in list" :key="index">
        <img  :src="item.image" class="banner-img">
      </van-swipe-item>
    </van-swipe>
    <Recomend :recomend="recomend"></Recomend>
    <featureview></featureview>
    <TabControl :title="['流行','新款','精选']" class="tab-control"></TabControl>
    <ul>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li><li>列表</li>
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
      <li>列表</li><li>列表</li>
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
      <li>列表</li><li>列表</li>
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
      <li>列表</li><li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
    </ul>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import TabControl from '@/components/content/TabControl/TabControl'

import Recomend from './childrencoponents/homerecomend'
import featureview from './childrencoponents/featureview'

import "assets/css/base.css";

import { getHomeMultidata } from "network/home";
export default {
  data() {
    return {
      list: [],
      recomend:[],
      goods:{
        'pop':{
          page:0,
          list:[]
        },
        'news':{
          page:0,
          list:[]
        },
        'sell':{
          page:0,
          list:[]
        }
      }
    };
  },
  components: {
    NavBar,
    TabControl,
    Recomend,
    featureview
  },
  created() {
    getHomeMultidata().then(res => {
      // console.log(res);
      this.list = res.data.data.banner.list;
      // console.log(this.list);
      
      this.recomend=res.data.data.recommend.list;
      
    });
  }
};
</script>

<style  scoped>
.home{
  padding: 44px 0 50px;
  /* padding-top:44px */
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

.banner-img{
    width: 100%;
  }
.tab-control{
  position: sticky;
  top: 44px;
  background: #fff;
}
</style>