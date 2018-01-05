<template>
  <div>
    <product-list></product-list>
  </div>
</template>

<script>
import axios from 'axios'
import ProductList from './shop/products/ProductList'

export default {
  data () {
    return {
      products: [],
      postsLoading: false
    }
  },
  components: {
    ProductList
  },
  methods: {
    getProductsToCache () {
      this.postsLoading = true

      var url = 'http://10.17.10.103:3000/product'

      axios.get(url)
        .then(response => {
          this.products = this.products.concat(response.data)

          localStorage.setItem('products', JSON.stringify(this.products))
          this.postsLoading = false
        })
        .catch(error => {
          console.log(error)
        })
    },

    getProducts () {
      if (navigator.onLine) {
        this.getProductsToCache()
        return this.products
      } else {
        return JSON.parse(localStorage.getItem('products'))
      }
    },
    formatPrice (value) {
      let val = (value / 1).toFixed(0).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    }
  },
  mounted () {
    this.getProducts()
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
  .mdl-grid {
    margin-top: 3em;
  }
  .take-picture-button {
    position: fixed;
    right: 24px;
    bottom: 90px;
    z-index: 5;
  }
</style>
