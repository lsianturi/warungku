import Vue from 'vue'
import Router from 'vue-router'
import ProductView from '@/components/shop/products/ProductView'
import LoginView from '@/components/LoginView'
import Logout from '@/components/Logout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: ProductView
    },
    {
      path: '/products',
      name: 'products',
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
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    }
  ]
})
