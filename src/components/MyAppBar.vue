<template lang="pug">
  v-app-bar(app)
    | Baratíssima Loja
    v-spacer
    | Carrinho
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
