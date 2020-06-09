<template>
  <div class="goodlist">
    <GoodsListItem v-for="(item,index) in goods" :key="index" :goods-item="item"></GoodsListItem>
  </div>
</template>

<script>
import GoodsListItem from './GoodListItem'
export default {
  components: {
    GoodsListItem
  },
  props: {
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style  scoped>
.goodlist{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>