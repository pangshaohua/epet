
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home.vue'
import Sort from '../pages/Sort/Sort.vue'
import Cart from '../pages/Cart/Cart.vue'
import Profile from '../pages/Profile/Profile.vue'

/*const Home = ()=> import('../pages/Home/Home.vue')
const Sort = ()=> import('../pages/Sort/Sort.vue')
const Cart = ()=> import('../pages/Cart/Cart.vue')
const Profile = ()=> import('../pages/Profile/Profile.vue')*/

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/sort',
      component:Sort
    },
    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/profile',
      component:Profile
    },
  ]
})
