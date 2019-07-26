import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BlogIndex from "../BlogIndex";
import BlogLogin from "../BlogLogin";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
     redirect:'/login'
    },
    {
      path:'/index',
      name:'BlogIndex',
      component:BlogIndex
    },
    {
      path:'/manage',
      redirect: '/login'
    },
    {
      path:'/login',
      name:'BlogLogin',
      component: BlogLogin
    }
  ]
})
