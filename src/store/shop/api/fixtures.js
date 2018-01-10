import axios from 'axios'

var url = 'http://10.17.10.103:3000/product'

export default {
  saveProductsToCache () {
    axios.get(url)
      .then(response => {
        this.products = []
        this.products = this.products.concat(response.data)
        localStorage.setItem('products', JSON.stringify(this.products))
        this.postsLoading = false
      })
      .catch(error => {
        console.log(error)
      })
  },
  getProducts (cb) {
    if (navigator.onLine) {
      this.saveProductsToCache()
      return cb(JSON.parse(localStorage.getItem('products')))
    } else {
      return cb(JSON.parse(localStorage.getItem('products')))
    }
  }
}
