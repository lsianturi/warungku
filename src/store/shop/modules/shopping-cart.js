const state = {
  added: [],
  productDiscount: false,
  totalDiscount: false,
  freeShipping: false
}

const mutations = {
  RECEIVE_PROFILE (state, profile) {
    state.data = profile
  },
  ADD_TO_CART (state, productId) {
    const record = state.added.find(product => product.id === productId)

    if (!record) {
      state.added.push({
        id: productId,
        quantity: 1
      })
    } else {
      record.quantity++
    }
  },

  REMOVE_FROM_CART (state, item) {
    const index = state.added.findIndex(added => added.id === item.id)
    state.added.splice(index, 1)
  }
}

export default {
  state,
  mutations
}
