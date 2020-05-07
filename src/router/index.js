import Vue from 'vue'
import VueRouter from 'vue-router'
// 1.安装插件
Vue.use(VueRouter)
// 2.创建路由对象
const routes=[{
    path:'',
    redirect:'/home'
},{
    path:'/home',
    name:'home',
    component:()=>import('../views/home/home.vue')
},{
    path:'/cart',
    name:'cart',
    component:()=>import('../views/cart/cart.vue')
},{
    path:'/category',
    name:'category',
    component:()=>import('../views/category/category.vue')
},{
    path:'/profile',
    name:'profile',
    component:()=>import('../views/profile/profile.vue')
}
]
const router=new VueRouter({
    routes,
    mode:'history'
})

// 3.导出
export default router