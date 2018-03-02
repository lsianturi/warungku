<template>
  <div>
    <product-list></product-list>
  </div>
</template>

<script>
import ProductList from './ProductList'

export default {
  name: 'product-view',
  components: {
    ProductList
  }
}
</script>

<style scoped>
  .take-picture-button {
    position: fixed;
    right: 24px;
    bottom: 90px;
    z-index: 5;
  }
</style>
