import axios from 'axios'

var url = 'http://10.17.10.103:3000/product'

export default {
  getProductsToCache () {
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
  }
}
