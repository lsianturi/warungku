<template>
  <div class="actions">
    <a :disabled="!product.inventory" @click.prevent="addToCart(product)" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
      Add to cart
    </a>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    product: Object
  },
  methods: mapActions([
    'addToCart'
  ])
}
</script>
