// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from './backend/vue-axios'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,
  template: '<App/>',
  components: { App },
  watch: {
    app: {
      handler () {
        console.log('Todos changed!')
        localStorage.setItem('store', JSON.stringify(this.store))
      },
      deep: true
    }
  },
  mounted () {
    console.log('App mounted!')
    if (localStorage.getItem('store')) this.todos = JSON.parse(localStorage.getItem('store'))
  }
})
