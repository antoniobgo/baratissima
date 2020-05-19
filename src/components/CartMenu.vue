<template lang="pug">
v-menu(
  bottom
  offset-y
  scrollable
  max-height="400"
  max-width="320"
  :close-on-content-click="false"
  )
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
        v-list-item-subtitle.my-2 Quantidade: {{ product.bought_quantity }}
        v-list-item-subtitle R$ {{ priceWithQuantity(product) }}
        v-list-item-subtitle
          v-btn(@click="decrementQuantity(product)" icon)
            v-icon mdi-minus
          v-btn(@click="incrementQuantity(product)" icon)
            v-icon mdi-plus
    v-divider
    v-list-item
      v-list-item-content
        v-list-item-title Preço total: R${{ totalPrice }}
        v-list-item-title Pague agora!
  v-card(v-else width="300")
    v-card-title
      | Seu carrinho está vazio!
    v-card-text
      | Selecione produtos em nossa loja para visualizar seu carrinho.
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    ...mapState(["count", "cartProducts"]),
    totalPrice() {
      let price = 0;
      this.cartProducts.forEach(product => {
        price = price + parseFloat(product.price) * product.bought_quantity;
      });
      return price.toFixed(2);
    }
  },
  methods: {
    priceWithQuantity(product) {
      return (parseFloat(product.price) * product.bought_quantity).toFixed(2);
    },
    isDisabled() {
      return this.count == 0;
    },
    incrementQuantity(product) {
      this.quantity = product.quantity;
      if (product.bought_quantity < this.quantity + product.bought_quantity)
        this.$store.commit("incrementProductBoughtQuantity", {
          product: product
        });
    },
    decrementQuantity(product) {
      if (product.bought_quantity > 0)
        this.$store.commit("decrementProductBoughtQuantity", {
          product: product
        });
    }
  }
};
</script>