<template lang="pug">
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
