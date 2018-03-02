<template>
  <div>
    <h3 class="title">Daftar Produk</h3>
    <div class="mdl-grid">
      <div v-bind:key="product.id" class="mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--6dp" v-for="product in products.all">
        <product :product="product" track-by="id">
        </product>
      </div>
    </div>
  </div>
</template>

<script>
import Product from './Product'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'ProductList',
  computed: {
    ...mapState({
      products: state => state.products
    })
  },
  created () {
    this.getProducts()
  },
  methods: mapActions([
    'getProducts'
  ]),
  components: {
    Product
  }
}
</script>
<style scoped>
  .mdl-grid {
    margin-top: 3em;
  }
</style>
