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
      default:false
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
    // 返回顶部传参（0,0,300毫秒）
    scrollTo(x,y,time=300){
          this.scroll.scrollTo(x,y,time)
      },
      refresh(){
        // 重新计算 better-scroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常
        console.log("-----"),
        this.scroll && this.scroll.refresh()
        
      },
      // 加载完成(上拉加载完成之后调用的函数)
      finishPullUp(){
        /** 
         * && 判断(如果第一个值为false,则直接返回返回第一个值)
         * 如果第一个值为true,则直接返回第二个值
         * 
         * || 与之相反
         * */ 
        this.scroll && this.scroll.finishPullUp()
      }

  },
  created() {},
  mounted() {
    // 1.创建bscroll对象
    this.scroll=new BScroll(this.$refs.wrapper,{
      click:true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad
    }),
    console.log(this.scroll)
    // 2.监听滚动位置
    this.scroll.on('scroll',(position)=>{
      // console.log(position);
      this.$emit("scroll",position)
      
    }),
    // 3.监听到scroll滚动到底部

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