<template lang="pug">
  v-navigation-drawer(app)
    v-list-item
        v-list-item-content
          v-list-item-title(class="title")
            h3 Loja virtual
          v-list-item-subtitle
            h4 Seja bem vindo!
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
    v-divider
    v-row.mt-3
      v-spacer
      h1 Filtrar
      v-spacer
    v-select.mx-4.mt-4(
      v-model="selectedPriceFilter"
      :items="priceItems"
      label="Preço"
      dense
    )
    v-col
      v-btn(@click="goToAddProductPage")
        | Adicionar Produto
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      selectedPriceFilter: "Sem filtro de preço",
      activeProductTypeShow: "sale",
      priceItems: ["Sem filtro de preço", "Maior preço", "Menor preço"]
    };
  },
  computed: {
    ...mapState(["productTypeToShow"])
  },
  methods: {
    showSaleProducts() {
      this.$store.commit("showSaleProducts");
      this.scrollUp();
      this.selectedPriceFilter = "Sem filtro de preço";
    },
    showElectronicProducts() {
      this.$store.commit("showElectronicProducts");
      this.scrollUp();
      this.selectedPriceFilter = "Sem filtro de preço";
    },
    showBookProducts() {
      this.$store.commit("showBookProducts");
      this.scrollUp();
      this.selectedPriceFilter = "Sem filtro de preço";
    },
    scrollUp() {
      window.scrollTo(0, 0);
    },
    goToAddProductPage() {
      this.$router.push('add-product')
    }
  },
  watch: {
    selectedPriceFilter() {
      if (this.selectedPriceFilter == "Sem filtro de preço") {
        if (this.productTypeToShow == "book") this.showBookProducts();
        else if (this.productTypeToShow == "sale") this.showSaleProducts();
        else this.showElectronicProducts();
      } else if (this.selectedPriceFilter == "Maior preço")
        this.$store.commit("showHigherPrices");
      else this.$store.commit("showSmallerPrices");
      this.scrollUp();
    }
  }
};
</script>

<style scoped>
.ai {
  height: 100%;
}
</style>