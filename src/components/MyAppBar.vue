<template lang="pug">
  v-app-bar(app)
    h3 Loja Virtual
    v-spacer
    v-btn(@click="goToLogin") Login
    cart-menu
</template>

<script>
import CartMenu from "@/components/CartMenu";
export default {
  components: {
    CartMenu
  },
  methods: {
    goToLogin() {
      this.$router.push('Login')
    }
  }
};
</script>
