import Vue from 'vue'
import Router from 'vue-router'
import ProductView from '@/components/ProductView'
import LoginView from '@/components/LoginView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: ProductView
    },
    {
      path: '/product',
      name: 'product',
      component: ProductView
    },
    {
      path: '/pesanan',
      name: 'pesanan',
      component: ProductView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
})
