/* global localStorage */
import axios from '@/backend/vue-axios'
import router from '@/router'

const state = {
  user: {}
}

const mutations = {
  LOGIN (state, data) {
    state.user = data
  },
  LOGOUT (state) {
    state.user = null
  }
}

const getters = {
  currentUser (state) {
    return state.user
  }
}

const actions = {
  login: ({ commit }, credential) => {
    return new Promise((resolve, reject) => {
      axios.get('http://svc.gunungsewu.com/ldap/ldapgw.php?txtpassword=' + credential.password + '&txtemail=' + credential.email + '&app=eksis')
        .then(response => {
          if (response.status === 200) {
            console.log('resp: ', response)
            commit('LOGIN', response.data)
            resolve(response)
            router.push('/products')
            console.log('state.user: ', state.user)
          } else {
            reject(response)
          }
        })
    })
  },
  logout: ({ commit }) => {
    commit('LOGOUT')
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
