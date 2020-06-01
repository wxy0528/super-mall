<template>
  <div class="recomend">
      <div v-for="(item,index) in recomend" :key="index" class="recomend-content">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <dir>{{item.title}}</dir>
          </a>
      </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
      recomend:{
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
<style  >
.recomend{
    display: flex;
    font-size: 12px;
    text-align: center;
    padding: 10px 0 30px;
    border-bottom: 8px solid #eee;
}
.recomend-content{
    flex: 1;
}
.recomend img{
    width: 65px;
    height: 65px;
}
</style>