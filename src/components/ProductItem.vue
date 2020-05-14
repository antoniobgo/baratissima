<template lang="pug">
  v-card(
    max-width="300"
  )
    v-img(
      src="https://i.correiobraziliense.com.br/D7nA7yEBHX5e3Qgc7iQ7nMJYM5I=/675x/smart/imgsapp2.correiobraziliense.com.br/app/noticia_127983242361/2019/10/04/794834/20191004154953157610i.jpg"
      height="180"
      )
    v-card-text
      v-list-item(three-line)
        v-list-item-content
          v-list-item-title {{ product.name }}
          v-list-item-subtitle R${{ productPrice }}
    v-card-actions
      v-dialog(
        v-model="dialog"
        width="300"
        )
        template(v-slot:activator="{ on }")
          v-spacer
          v-btn(
            v-on="on"
          )
            | Adicionar ao carrinho
          v-spacer
        v-card
          v-card-title
            | Selecione a quantidade
          v-card-subtitle.mt-0
            | Quantidade disponivel: {{ product.quantity }}
          v-card-text
            v-row(dense)
              v-col(cols="3")
                v-text-field(
                  v-model="quantity"
                  :rules="rules"
                  outlined
                  dense
                )
              v-col(cols="2")
                v-btn(
                  @click="decrementQuantity"
                  icon
                )
                  v-icon mdi-minus-circle-outline
              v-col(cols="2")
                v-btn(
                  @click="incrementQuantity"
                  icon
                )
                  v-icon mdi-plus-circle-outline
            v-divider
          v-card-actions
            v-spacer
            v-btn(
              @click="closeDialog"
              outlined
            ) Cancelar
            v-btn(
              @click="addCartItems"
              :disabled="isConfirmButtonDisabled"
              outlined
            ) Confirmar
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      productName: undefined,
      dialog: false,
      quantity: 0,
      rules: [value => value > 0 && value <= this.product.quantity]
    };
  },
  computed: {
    productPrice() {
      return parseFloat(this.product.price).toFixed(2);
    },
    isConfirmButtonDisabled() {
      return !(this.quantity > 0 && this.quantity <= this.product.quantity);
    }
  },
  methods: {
    addCartItems() {
      this.$store.commit("addItemOnCart", {
        product: this.product,
        quantity: this.quantity
      });
      this.product.quantity -= this.quantity;
      this.quantity = 0;
      this.closeDialog();
    },
    incrementQuantity() {
      if (this.quantity < this.product.quantity) this.quantity++;
    },
    decrementQuantity() {
      if (this.quantity > 0) this.quantity--;
    },
    closeDialog() {
      this.dialog = false;
      this.quantity = 0;
    }
  }
};
</script>
