import Vue from 'vue'
import Router from 'vue-router'
//1. 引入自定义组件
import HomeContainer from './views/tabbar/HomeContainer.vue'
import ProfileContainer from './views/tabbar/ProfileContainer.vue'

Vue.use(Router)

//2. 指定该组件的访问路径
export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',name:'HomeContainer',component:HomeContainer},
    {path:'/profile',name:'ProfileContainer',component:ProfileContainer}
  ],linkActiveClass:"mui-active" //覆盖默认路由高亮类(首页、分类、购物车、我的)
})
