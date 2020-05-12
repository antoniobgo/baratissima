<template lang="pug">
  v-app-bar(app)
    | Baratíssima Loja
    v-spacer
    | Carrinho
    v-menu(bottom offset-y)
      template(v-slot:activator="{ on }")
        v-btn(
          v-on="on"
          depressed
          )
          v-icon.mr-2 mdi-cart
          | {{ count }}
      v-list(v-if="count > 0" three-line)
        v-list-item(v-for="product in cartProducts")
          v-list-item-avatar(
            tile
            size="60"
          )
            v-img(
              src="https://i.correiobraziliense.com.br/D7nA7yEBHX5e3Qgc7iQ7nMJYM5I=/675x/smart/imgsapp2.correiobraziliense.com.br/app/noticia_127983242361/2019/10/04/794834/20191004154953157610i.jpg"
            )
          v-list-item-content
            v-list-item-title {{ product.name }}
            v-list-item-subtitle R$ {{ product.price }}
        v-divider
        v-list-item
          v-list-item-title Preço total: {{ totalPrice }}

</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["count", "cartProducts"]),
    totalPrice() {
      let price = 0;
      this.cartProducts.forEach(product => {
        price = price + parseFloat(product.price);
      });
      return price;
    }
  },
  methods: {}
};
</script>
