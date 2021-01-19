<template lang="pug">
  v-app-bar(app)
    h3 Loja Virtual
    v-spacer
    v-btn(v-if="!loggedIn" @click="goToLogin") Login
    v-btn(v-else @click="goToMyAccount") My account
    cart-menu
</template>

<script>
import CartMenu from "@/components/CartMenu";
import { mapState } from "vuex";

export default {
  components: {
    CartMenu
  },
  computed: {
    ...mapState(['loggedIn', 'currentUser'])
  },
  methods: {
    goToLogin() {
      this.$router.push('Login')
    },
    goToMyAccount() {
      this.$router.push({name: 'MyAccount'})
    }
  }
};
</script>
