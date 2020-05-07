<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
import TabBarItem from "./TabBarItem";
export default {
  name: "TabBar",
  components: {
    TabBarItem
  },
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
#tab-bar {
  display: flex;
  background: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -3px 1px rgba(100, 100, 100, 0.2);
}
</style>