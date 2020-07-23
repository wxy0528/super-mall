import Vue from "vue";
import Vuex from "vuex";
// 1.安装插件
Vue.use(Vuex);

// 2.创建store对象

const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    //   mutations唯一的目的就是修改state中状态
    // mutations中每个方法尽可能完成的事件单一
    addCounter(state, payload) {
      payload.count++;
    },
    addToCart(state, payload) {
      state.cartList.push(payload);
    }
  },
  actions: {
    addCart(context, payload) {
      // 1.查找之前数组中是否有该商品
      // find() 方法返回通过测试（函数内判断）的数组的第一个元素的值。
      let oldproduct = context.state.cartList.find(
        item => item.iid === payload.iid
      );
      // 判断oldproduct
      if (oldproduct) {
        // oldproduct.count += 1;
        context.commit("addCounter", oldproduct);
      } else {
        payload.count = 1;
        // state.cartList.push(payload);
        context.commit("addToCart", payload);
      }
    }
  }
});

// 3.挂载到Vue实例中

export default store;
