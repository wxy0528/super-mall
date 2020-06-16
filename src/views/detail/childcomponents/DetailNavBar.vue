<template>
  <div class="detailNavBar">
    <NavBar class="navbar">
      <div slot="left" @click="navbarBack">
        <img src="~assets/img/common/back.svg" alt />
      </div>
      <div slot="center" class="title">
        <div
          class="title-item"
          v-for="(item,index) in title"
          :key="index"
          :class="{active : currentIndex==index}"
          @click="titleClick(index)"
        >{{item}}</div>
      </div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  components: {
    NavBar
  },
  props: {},
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  watch: {},
  computed: {},
  methods: {
    titleClick(index) {
      this.currentIndex = index;
    },
    navbarBack() {
      this.$router.back();
    }
  },
  created() {},
  mounted() {}
};
</script>
<style  scoped>
.title {
  display: flex;
  font-size: 13px;
}
.title-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.navbar {
  position: relative;
  z-index: 9;
  background: #fff;
  border-bottom: 1px solid #eee;
}
</style>