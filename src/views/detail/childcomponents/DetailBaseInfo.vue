<template>
  <div class="base-info" v-if="Object.keys(goods).length!==0">
      <div class="info-title">{{goods.desc}}</div>
      <div class="info-price">
          <span class="n-price">{{goods.newPrice}}</span>
          <span class="o-price">{{goods.oldPrice}}</span>
          <span class="discount" v-if="goods.discount"
          :style="{background:goods.discountBgColor}"
          >{{goods.discount}}</span>
      </div>
      <div class="info-other">
          <span>{{goods.columns[0]}}</span>
          <span>{{goods.columns[1]}}</span>
          <span>{{goods.service[goods.service.length-1].name}}</span>
      </div>
      <div class="info-service">
          <span v-for="index in goods.service.length-1" :key="index">
              <img :src="goods.service[index-1].icon" alt="">
              <span>{{goods.service[index-1].name}}</span>
          </span>
      </div>
      
  </div>
</template>

<script>
export default {
  components: {},
  props: {
      goods:{
          type:Object,
          default(){
              return {}
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
.base-info{
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
}
.info-title{
    color: #222;
    font-size: 18px;
}
.info-price{
    margin-top: 10px;
}
.info-price .n-price{
    font-size: 24px;
    color: var(--color-high-text);
}
.info-price .o-price {
    font-size: 16px;
    margin-left: 15px;
    text-decoration: line-through;
  }
.info-price .discount{
    /* background: var(--color-high-text); */
    border-radius: 8px;
    padding: 5px 10px;
    color: #fff;
    font-size: 15px;
    position: relative;
    top: -8px;
}
.info-other{
    margin-top: 20px;
    font-size: 15px;
    display: flex;
    text-align: center;
    border-bottom: 1px solid rgba(100,100,100,.1);
    line-height: 40px;
}
.info-other span{
    flex: 1;
}
.info-service{
    font-size: 14px;
    display: flex;
    
    text-align: center;
    line-height: 60px;
}
.info-service img{
    width: 14px;
    height: 14px;
    vertical-align: middle;
}
.info-service span{
    color: #333;
    flex: 1;
}

</style>