<template>
  <div>
    <h3>Cart</h3>

    <shopping-cart-item
      v-for="item in items"
      :item="item"
      :key="item.id">
    </shopping-cart-item>

    <shopping-cart-summary></shopping-cart-summary>

    <div class="mt-1 text-xs-center">
      <button class="btn btn-success"
        @click="buy">
        Checkout
      </button>
    </div>
  </div>
</template>

<script>
import ShoppingCartItem from './ShoppingCartItem'
import ShoppingCartSummary from './ShoppingCartSummary'
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    items: 'cartProducts'
  }),
  components: {
    ShoppingCartItem,
    ShoppingCartSummary
  },
  methods: {
    buy () {
      window.alert('You bought :')
      window.location.reload()
    }
  }
}
</script>
