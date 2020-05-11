<template lang="pug">
  v-app-bar(app)
      | Baratíssima Loja
      v-spacer
      | Carrinho
      v-btn(depressed)
        v-icon.mr-2 mdi-cart
        | {{ count }}
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["count"])
};
</script>
