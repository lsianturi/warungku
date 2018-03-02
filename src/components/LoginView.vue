<template>
  <div class="mdl-grid">
    <div class="mdl-layout-spacer"></div>
    <div class="mdl-card mdl-shadow--4dp my-login-card-size">
      <form @submit.prevent="login({email, password})">
        <div class="mdl-card__title mdl-color--primary mdl-color-text--white">
          <h2 class="mdl-card__title-text">Login</h2>
        </div>
        <div class="mdl-card__supporting-text">
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input ref="txtEmail" placeholder="GSK user name" class="mdl-textfield__input" type="text" id="email" v-model="email">
            <label class="mdl-textfield__label" for="email">Username:</label>
            <span class="mdl-textfield__error">Please insert your computer login name.</span>
          </div>
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input ref="txtPassword" placeholder="Password" class="mdl-textfield__input" type="password"
                   id="password" v-model="password">
            <label class="mdl-textfield__label" for="password">Password:</label>
          </div>

        </div>
        <div class="mdl-card__actions mdl-card--border">
          <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
            <span v-if="isLoading">Loading...</span>
            <span v-else>Sign In</span>
          </button>

          <span v-if="this.error" class="mdl-color-text--red-500"><strong>{{ this.error }}</strong></span>
        </div>
      </form>
    </div> <!-- End mdl-card -->
    <div class="mdl-layout-spacer"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'login-view',
  data () {
    return {
      isLoading: false
    }
  },
  computed: mapGetters([
    'isLoggedIn'
  ]),
  created () {
  },
  updated () {
  },
  methods: mapActions([
    'login',
    'logout'
  ])
}
</script>

<style scoped>
  .my-login-card-size {
    max-width: 320px;
    height: auto;
  }
</style>
