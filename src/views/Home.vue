<template lang="pug">
  v-container(
    v-if="products && !loading"
    fluid
    )
    v-row(justify="center")
      h1.mr-10 {{ showProductType }}
    v-row(dense)
      product-item.ma-4(
                  v-for="product in getPageProducts"
                  :product="product"
                  )
    v-divider
    v-row(justify="center")
      pagination-items(
        :totalPages="getTotalPagesArray"
        :currentPage="currentPage"
        @changePage="changeCurrentPage"
      )
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
import ProductItem from "@/components/ProductItem";
import PaginationItems from "@/components/PaginationItems";
export default {
  name: "Home",
  components: { ProductItem, PaginationItems },
  data() {
    return {
      itemsPerPage: 12,
      loading: true,
      currentPage: 1
    };
  },
  mounted() {
    axios
      .get("https://5ed52f3e8769250016e6338a.mockapi.io/products")
      .then(response => {
        this.$store.commit(
          "setDataProducts",
          this.lodash.shuffle(response.data)
        );
        let products = this.lodash.filter(this.dataProducts, product => {
          return product.on_sale == true;
        });
        this.$store.commit("setProducts", products);
        this.loading = false;
      });
  },
  computed: {
    ...mapState(["products", "dataProducts", "productTypeToShow"]),
    getPageProducts() {
      let pageProducts = [];
      for (
        let i = this.itemsPerPage * (this.currentPage - 1);
        i < this.itemsPerPage * this.currentPage;
        i++
      )
        if (this.products[i]) pageProducts.push(this.products[i]);
      return pageProducts;
    },
    getTotalPagesArray() {
      let totalPages = this.getTotalPagesAndResetCurrentPage();
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    },
    showProductType() {
      switch (this.productTypeToShow) {
        case "sale":
          return "Produtos em promoção!";
        case "electronic":
          return "Produtos eletrônicos";
        default:
          return "Livros";
      }
    }
  },
  methods: {
    changeCurrentPage(newCurrentPage) {
      this.currentPage = newCurrentPage;
      window.scrollTo(0, 0);
    },
    getTotalPagesAndResetCurrentPage() {
      this.currentPage = 1;
      let lengthPerItems = parseInt(this.products.length / this.itemsPerPage);
      if (this.products.length % this.itemsPerPage == 0) return lengthPerItems;
      return lengthPerItems + 1;
    }
  }
};
</script>