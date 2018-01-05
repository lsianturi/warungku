<template>
  <div class="LoginView">
    <login-component
      passwordPattern=".{4,10}"
      passwordMessage="Password length must be 4 to 10 characters long."
      @loginCredentials="loginAttempt"
      :errorMessage="errorMessage"
    ></login-component>
  </div>
</template>

<script>
import LoginComponent from './LoginComponent'
import axios from 'axios'

export default {
  name: 'LoginView',
  components: {
    'login-component': LoginComponent
  },
  data () {
    return {
      errorMessage: ''
    }
  },
  methods: {
    loginAttempt: function (credentials) {
      console.log('Email is: ' + credentials.email)
      console.log('Password is: ' + credentials.password)
      var url = 'http://svc.gunungsewu.com/ldap/ldapgw.php?txtpassword=' + credentials.password + '&txtemail=' + credentials.email + '&app=eksis'
      console.log('Url: ' + url)

      axios.get(url)
        .then(response => {
          console.log('resp: ', response)
          if (response.status === 200) {
            console.log('resp: ', response.data)
            if (response.data.status === 'true') {
              this.$store.user = response.data
              this.$store.state.isLoggedIn = true
              window.localStorage.setItem('lbUser', JSON.stringify(this.user))
              this.$router.push('/product')
            } else {
              this.errorMessage = 'Wrong password or username'
            }
          }
        })
        .catch(error => {
          console.log(error)
          this.errorMessage = error.errorMessage
        })
      this.errorMessage = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
