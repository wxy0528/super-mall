<template>
    <div>
      <TabBar>
      <TabBarItem path="/home" activeColor="pink">
        <img src="@/assets/img/tabbar/home.svg" alt slot="item-icon" />
        <img src="@/assets/img/tabbar/home_active.svg" alt slot="item-icon-active" />
        <div slot="item-text">首页</div>
      </TabBarItem>
      <TabBarItem path="/category" activeColor="pink">
        <img src="@/assets/img/tabbar/category.svg" alt slot="item-icon" />
        <img src="@/assets/img/tabbar/category_active.svg" alt slot="item-icon-active" />
        <div slot="item-text">分类</div>
      </TabBarItem>
      <TabBarItem path="cart" activeColor="pink">
        <img src="@/assets/img/tabbar/cart.svg" alt slot="item-icon" />
        <img src="@/assets/img/tabbar/cart_active.svg" alt slot="item-icon-active" />
        <div slot="item-text">购物车</div>
      </TabBarItem>
      <TabBarItem path="profile" activeColor="pink">
        <img src="@/assets/img/tabbar/profile.svg" alt slot="item-icon" />
        <img src="@/assets/img/tabbar/profile_active.svg" alt slot="item-icon-active" />
        <div slot="item-text">我的</div>
      </TabBarItem>
    </TabBar>
    </div>
</template>

<script>
import TabBar from "../../common/tabbar/TabBar";
import TabBarItem from "../../common/tabbar/TabBarItem";
export default {
  components: {
    TabBar,
    TabBarItem
  }
};
</script>