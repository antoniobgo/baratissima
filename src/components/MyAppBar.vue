<template lang="pug">
  v-app-bar(app)
    h3 Loja Virtual
    v-spacer
    h4 Carrinho
    cart-menu
</template>

<script>
import CartMenu from "@/components/CartMenu";
export default {
  components: {
    CartMenu
  }
};
</script>
