import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button,Swipe,SwipeItem,Lazyload,List,PullRefresh,Cell, CellGroup  } from 'vant';
const usevant = [Button,Swipe,SwipeItem,List,PullRefresh,Cell, CellGroup ];
//解决移动端适配问题
import 'amfe-flexible/index.js'
for(let i=0;i<usevant.length;i++){
  Vue.use(usevant[i])
}
Vue.use(Lazyload, {
  lazyComponent: true,
});
Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
