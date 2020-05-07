<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="{color:isActive?activeColor:'black'}">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  components: {},
  props: {
    path: String,
    activeColor:{
        type:String,
        default:'red'
    }
  },
  data() {
    return {
      // isActive:true,
    };
  },
  watch: {},
  computed: {
    isActive() {
        // this.$route代表当前路由（当前路由是否能够匹配）
      return this.$route.path.indexOf(this.path) !== -1;
    },
    
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  /* line-height: 49px; */
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  margin-bottom: 2px;
  vertical-align: middle;
}
/* .active {
  color: red;
} */
</style>