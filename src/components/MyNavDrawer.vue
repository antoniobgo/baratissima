<template lang="pug">
  v-navigation-drawer(app)
    v-list-item
        v-list-item-content
          v-list-item-title(class="title")
            | Baratíssima
          v-list-item-subtitle
            | Seja bem vindo
    v-divider
    v-list-item(@click="showSaleProducts" link)
      v-list-item-icon
        v-icon  mdi-tag
      v-list-item-content
        v-list-item-title Ofertas do dia
    v-list-item(@click="showElectronicProducts" link)
      v-list-item-icon
        v-icon  mdi-cellphone-android
      v-list-item-content
        v-list-item-title Eletrônicos
    v-list-item(@click="showBookProducts" link)
      v-list-item-icon
        v-icon  mdi-bookshelf
      v-list-item-content
        v-list-item-title Livros


</template>

<script>
export default {
  methods: {
    showSaleProducts() {
      this.$store.commit("showSaleProducts");
    },
    showElectronicProducts() {
      this.$store.commit("showElectronicProducts");
    },
    showBookProducts() {}
  }
};
</script>
