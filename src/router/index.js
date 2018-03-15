
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home.vue'
import Sort from '../pages/Sort/Sort.vue'
import Cart from '../pages/Cart/Cart.vue'
import Profile from '../pages/Profile/Profile.vue'

import SortCategory from '../pages/Sort/SortCategory/SortCategory.vue'
import SortBrand from '../pages/Sort/SortBrand/SortBrand.vue'

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
      component:Sort,
      children:[
        {
          path:'/sort/category',
          component:SortCategory
        },
        {
          path:'/sort/brand',
          component:SortBrand
        },
      ],
    },
    {
      path:'/cart',
      component:Cart,

    },
    {
      path:'/profile',
      component:Profile
    },
  ]
})
