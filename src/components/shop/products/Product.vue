<template>
  <div class="card text-xs-center">
    <div class="mdl-card__media image-card__picture">
        <img :src="getImageUrl(product.image_path)">
    </div>
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text">{{ product.name }}<br>{{ product.detail }}</h2>
    </div>
    <div class="mdl-card__supporting-text">{{product.id}} - IDR {{ formatPrice(product.price) }} Stock: {{ product.inventory }}</div>
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
    },
    getImageUrl (image) {
      return 'http://localhost:3000/api/v1' + image
    }
  }
}
</script>
<style scoped>
  .mdl-card__media {
    background-color: white;
    align-self: center;
  }
  .image-card {
    position: relative;
    margin-bottom: 8px;
    max-width: 960px;
    margin: auto;
  }
  .image-card__picture > img {
    width:80%;
  }

</style>
