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
          v-list-item-subtitle {{ product.price }}
    v-card-actions
      v-spacer
      v-btn(
        @click="addCartItem"
      )
        | Adicionar ao carrinho
      v-spacer
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
      productName: undefined
    };
  },
  methods: {
    addCartItem() {
      this.$store.commit("addItemOnCart", this.product);
    }
  }
};
</script>
