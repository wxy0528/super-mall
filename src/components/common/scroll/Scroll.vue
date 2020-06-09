<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:"Scroll",
  components: {},
  props: {
    probeType:{
      type:Number,
      default(){
        return 0
      }
    },
    pullUpLoad:{
      type:Boolean,
      default:true
    }
  },
  data() {
    return {
      scroll:null,
      message:"hahh",
      
    };
  },
  watch: {},
  computed: {},
  methods: {
    scrollTo(x,y,time=300){
          this.scroll.scrollTo(x,y,time)
      }
  },
  created() {},
  mounted() {
    // 1.创建bscroll对象
    this.scroll=new BScroll(this.$refs.wrapper,{
      click:true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad
    })
    // 2.监听滚动位置
    this.scroll.on('scroll',(position)=>{
      // console.log(position);
      this.$emit("scroll",position)
    })
    // 监听上拉事件(pullingUp是bscroll的参数,用来监听上拉事件的)
    this.scroll.on("pullingUp",()=>{
      // console.log("上拉加载更多")
      this.$emit("pullingUp")
    })
  }
};
</script>
<style  scoped>

</style>