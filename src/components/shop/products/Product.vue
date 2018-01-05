<template>
  <div class="card text-xs-center">
    <div class="mdl-card__media image-card__picture">
        <img :src="prd.ImagePath">
    </div>
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text">{{ product.Name }}<br>{{ product.Detail }}</h2>
    </div>
    <div class="mdl-card__supporting-text">IDR {{ formatPrice(product.Price) }}</div>
    <div class="mdl-card__actions mdl-card--border">
      <add-to-cart :product="product"></add-to-cart>
    </div>
  </div>
</template>

<script>
import AddToCart from './AddToCart'

export default {
  props: {
    product: Object
  },
  components: { AddToCart },
  methods: {
    formatPrice (value) {
      let val = (value / 1).toFixed(0).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    }
  }
}
</script>
