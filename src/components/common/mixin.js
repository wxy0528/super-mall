import {debounce} from 'components/common/utils.js'

export const itemListenerMixin ={
    mounted() {
        let newfresh =debounce(this.$refs.scroll.refresh,100)
    this.itemLImgListener = ()=>{
      newfresh()
    }
    this.$bus.$on('itemImgLoad',this.itemLImgListener)
    // console.log('混入的内容')
    }
}