import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button,Swipe,SwipeItem,Lazyload  } from 'vant';
const usevant = [Button,Swipe,SwipeItem];
//解决移动端适配问题
import 'amfe-flexible/index.js'
for(let i=0;i<usevant.length;i++){
  Vue.use(usevant[i])
}
Vue.use(Lazyload, {
  lazyComponent: true,
});
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
