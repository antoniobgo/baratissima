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
          v-row(justify="center")
            v-btn(
              v-on="on"
            )
              | Adicionar ao carrinho
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
            v-container
              v-row(justify="space-between")
                v-btn.ml-4(
                  @click="closeDialog"
                  outlined
                  small
                ) Cancelar
                v-btn.mr-4(
                  @click="addCartItems"
                  :disabled="isConfirmButtonDisabled"
                  small
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
      this.checkValuesAndSetValue();
    },
    decrementQuantity() {
      if (this.quantity > 0) this.quantity--;
      this.checkValuesAndSetValue();
    },
    checkValuesAndSetValue() {
      if (
        isNaN(this.quantity) ||
        this.quantity < 0 ||
        this.quantity > this.product.quantity
      )
        this.quantity = 0;
    },
    closeDialog() {
      this.dialog = false;
      this.quantity = 0;
    }
  }
};
</script>
