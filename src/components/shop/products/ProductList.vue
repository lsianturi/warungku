<template>
  <div>
    <h3 class="title">Daftar Produk</h3>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--3-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--6dp" v-for="product in this.products">
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
  computed: mapState({
    products: this.getProducts()
  }),
  methods: mapActions([
    'getProducts'
  ]),
  components: { Product },
  created () {
    this.getProducts()
  }
}
</script>
