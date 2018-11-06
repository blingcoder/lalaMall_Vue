import Vue from 'vue'
import Router from 'vue-router'
//1. 引入自定义组件
import HomeContainer from './views/tabbar/HomeContainer.vue'
import ProfileContainer from './views/tabbar/ProfileContainer.vue'
import CartContainer from './views/tabbar/CartContainer.vue'
import SortContainer from './views/tabbar/SortContainer.vue'
import AddrManage from './components/AddrManage.vue'
import MessageBox from './components/MessageBox.vue'
import Coupon from './components/coupon/Coupon.vue'

Vue.use(Router)

//2. 指定该组件的访问路径
export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',name:'HomeContainer',component:HomeContainer},
    {path:'/profile',name:'ProfileContainer',component:ProfileContainer},
    {path:'/profile/addrmanage',name:'AddrManage',component:AddrManage},
    {path:'/profile/messagebox',name:'MessageBox',component:MessageBox},
    {path:'/profile/coupon',name:'Coupon',component:Coupon},
    {path:'/cart',name:'CartContainer',component:CartContainer},
    {path:'/sort',name:'SortContainer',component:SortContainer}
  ],linkActiveClass:"mui-active" //覆盖默认路由高亮类(首页、分类、购物车、我的)
})
