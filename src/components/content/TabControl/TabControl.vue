<template>
  <div class="tab-control">
    <div v-for="(item,index) in title" :key="index" class="tab-control-item" 
    :class="{'active':index==currentIndex}"
    @click='itemclick(index)'>
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    title:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      currentIndex:0
    };
  },
  watch: {},
  computed: {},
  methods: {
    itemclick(index){
      this.currentIndex=index
    }
  },
  created() {},
  mounted() {}
};
</script>
<style  scoped>
.tab-control{
  display: flex;
  text-align: center;
  height: 44px;
  line-height: 44px;
  font-size: 15px;
    
}
.tab-control-item{
  flex: 1;
}
.tab-control-item span{
  padding: 5px;
}
.active{
  color: var(--color-high-text);
}
.active span{
  border-bottom: 3px solid var(--color-tint);
}
</style>