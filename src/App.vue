<template>
  <div id="app" class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">Warungku</span>
        <div class="mdl-layout-spacer"></div>
          <nav class="mdl-navigation mdl-layout--large-screen-only">
            <span class="mdl-layout-title" v-on:click="logout()" style="cursor:pointer;" v-if="checkLogin">Logout</span>
            <span class="mdl-layout-title" v-on:click="login()" style="cursor:pointer;" v-else>Login</span>
          </nav>
      </div>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">Warungku</span>
      <nav class="mdl-navigation">
        <router-link class="mdl-navigation__link" to="/product" @click.native="hideMenu">Home</router-link>
        <router-link class="mdl-navigation__link" to="/pesanan" @click.native="hideMenu">Pesananku</router-link>
        <span class="mdl-navigation__link" v-on:click="logout()" style="cursor:pointer;" v-if="checkLogin">Logout</span>
        <span class="mdl-navigation__link" v-on:click="login(), hideMenu()" style="cursor:pointer;" v-else>Login</span>
      </nav>
    </div>
    <main class="mdl-layout__content">
      <div class="page-content">
        <router-view/>
      </div>
    </main>
  </div>
</template>

<script>
require('material-design-lite')
export default {
  name: 'app',
  methods: {
    hideMenu: function () {
      document.getElementsByClassName('mdl-layout__drawer')[0].classList.remove('is-visible')
      document.getElementsByClassName('mdl-layout__obfuscator')[0].classList.remove('is-visible')
    },
    logout: function () {
      var app = this
      localStorage.removeItem('lbUser')
      app.$router.push({name: 'product'})
      app.$store.state.isLoggedIn = false
      app.$store.user = ''
    },
    login: function () {
      this.$router.push({name: 'login'})
    }
  },
  computed: {
    checkLogin () {
      return this.$store.state.isLoggedIn
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  @import url('https://code.getmdl.io/1.2.1/material.blue-red.min.css');
</style>
