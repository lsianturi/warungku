import axios from '@/backend/vue-axios'

const state = {
  all: []
}

const mutations = {
  RECEIVE_PRODUCTS (state, products) {
    state.all = products
  },

  ADD_TO_CART (state, productId) {
    state.all
      .find(product => product.id === productId)
      .inventory--
  },

  REMOVE_FROM_CART (state, removedProduct) {
    state.all
      .find(product => product.id === removedProduct.id)
      .inventory += removedProduct.quantity
  }
}

const actions = {
  getProducts: ({ commit }) => {
    return new Promise((resolve, reject) => {
      axios.get('/products').then(response => {
        if (response.status === 200) {
          commit('RECEIVE_PRODUCTS', response.data)
          resolve(response)
        } else {
          reject(response)
        }
      })
    })
  }
}

export default {
  state,
  mutations,
  actions
}
