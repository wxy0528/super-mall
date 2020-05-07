<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style  scoped>

.nav-bar{
display: flex;
line-height: 44px;
height: 44px;
text-align: center;
}
.left{
width: 60px;
/* background: red; */
}
.center{
/* background: blue; */
flex: 1;
}
.right{
width: 60px;
/* background: red; */
}

</style>