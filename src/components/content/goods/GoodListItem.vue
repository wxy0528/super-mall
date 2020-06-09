<template>
  <div class="goodlistitem">
    <img :src="goodsItem.show.img" alt="">
    <div class="goodsinfo">
       <p>{{goodsItem.title}}</p>
       <span class="price">￥{{goodsItem.price}}</span>
       <span class="cfav">{{goodsItem.cfav}}</span>
     </div>
  </div>
</template>

<script>

export default {
  components: {},
  props: {
    goodsItem:{
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
.goodlistitem{
  padding-bottom: 40px;
  width: 48%;
  font-size: 0.4rem;
}
.goodlistitem img{
  width: 100%;
  border-radius: 5px;
}
.goodsinfo p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goodsinfo .price{
  margin-right: 30px;
  color: var(--color-high-text);
}
.goodlistitem .cfav{
  position: relative;
}
.goodlistitem .cfav::before{
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  display: block;
  background: url('~assets/img/common/collect.svg') 0 0/14px 14px;
}

</style>