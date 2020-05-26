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
    v-select.mx-4.mt-4(
      v-model="selectedQuantityFilter"
      :items="quantityItems"
      label="Quantidade"
      dense
    )
    v-select.mx-4.mt-4(
      v-model="selectedPopularityFilter"
      :items="popularityItems"
      label="Populares"
      dense
    )
</template>

<script>
export default {
  data() {
    return {
      selectedPriceFilter: undefined,
      selectedQuantityFilter: undefined,
      selectedPopularityFilter: undefined,
      activeProductTypeShow: "sale",
      priceItems: ["Sem filtro de preço", "Maior preço", "Menor preço"],
      quantityItems: [
        "Sem filtro de quantidade",
        "Maior quantidade disponivel",
        "Menor quantidade disponivel"
      ],
      popularityItems: [
        "Sem filtro de popularidade",
        "Maior popularidade",
        "Menor popularidade"
      ]
    };
  },
  methods: {
    showSaleProducts() {
      this.$store.commit("showSaleProducts");
      this.scrollUp();
      this.resetFilters();
    },
    showElectronicProducts() {
      this.$store.commit("showElectronicProducts");
      this.scrollUp();
      this.resetFilters();
    },
    showBookProducts() {
      this.$store.commit("showBookProducts");
      this.scrollUp();
      this.resetFilters();
    },
    scrollUp() {
      window.scrollTo(0, 0);
    },
    resetFilters() {
      this.selectedQuantityFilter = undefined;
      this.selectedPopularityFilter = undefined;
      this.selectedPriceFilters = undefined;
    }
  },
  watch: {
    selectedPriceFilter() {
      this.selectedQuantityFilter = undefined;
      this.selectedPopularityFilter = undefined;
      if (this.selectedPriceFilter == "Sem filtro de preço")
        this.selectedPriceFilter = undefined;
      else if (
        this.selectedPriceFilter != undefined &&
        this.selectedPriceFilter != "Sem filtro de preço"
      ) {
        if (this.selectedPriceFilter == "Maior preço")
          this.$store.commit("showHigherPrices");
        else this.$store.commit("showSmallerPrices");
      }
    },
    selectedQuantityFilter() {
      this.selectedPriceFilter = undefined;
      this.selectedPopularityFilter = undefined;
      if (this.selectedQuantityFilter != "Sem filtro de quantidade")
        this.selectedQuantityFilter = undefined;
      else if (
        this.selectedQuantityFilter != undefined &&
        this.selectedQuantityFilter != "Sem filtro de quantidade"
      ) {
        if (this.selectedQuantityFilter == "Maior quantidade disponivel")
          this.$store.commit("showHigherQuantities");
        else this.$store.commit("showSmallerQuantities");
      }
    },
    selectedPopularityFilter() {
      this.selectedQuantityFilter = undefined;
      this.selectedPriceFilter = undefined;
      if (this.selectedPopularityFilter != undefined)
        this.selectedPopularityFilter = undefined;
      else if (
        this.selectedPopularityFilter != undefined &&
        this.selectedPopularityFilter != "Sem filtro de popularidade"
      ) {
        if (this.selectedPopularityFilter == "Maior popularidade")
          this.$store.commit("showHigherPopularity");
        else this.$store.commit("showSmallerPopularity");
      }
    }
  }
};
</script>
