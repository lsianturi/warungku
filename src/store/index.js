import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './shop/actions'
import * as getters from './shop/getters'
import auth from './shop/modules/login'
import products from './shop/modules/products'
import shoppingCart from './shop/modules/shopping-cart'
// import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    auth,
    products,
    shoppingCart
  },
  actions,
  // mutations: {
  //   initialiseStore (state) {
  //     if (localStorage.getItem('store')) {
  //       this.replaceState(Object.assign(state, JSON.parse(localStorage.getItem('store'))))
  //     }
  //   }
  // },
  getters,
  // plugins: [createPersistedState()],
  strict: debug
})
/* .subscribe((mutation, state) => {
  localStorage.setItem('store', JSON.stringify(state))
})
 */
