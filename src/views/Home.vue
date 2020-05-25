<template lang="pug">
  v-container(
    v-if="products && !loading"
    fluid
    )
    v-row(dense)
      product-item.ma-4(
                  v-for="product in getPageProducts"
                  :product="product"
                  )
    v-divider
    v-row(justify="center")
      pagination-items(
        :totalPages="totalPagesArray"
        :currentPage="currentPage"
        @changePage="changeCurrentPage"
      )
</template>

<script>
import axios from "axios";
import ProductItem from "@/components/ProductItem";
import PaginationItems from "@/components/PaginationItems";
export default {
  name: "Home",
  components: { ProductItem, PaginationItems },
  data() {
    return {
      products: undefined,
      itemsPerPage: 12,
      totalPagesArray: undefined,
      loading: true,
      currentPage: 1
    };
  },
  mounted() {
    axios.get("http://localhost:3001/api/products").then(response => {
      this.products = response.data.data;
      let totalPages = this.getTotalPages();
      this.totalPagesArray = Array.from(
        { length: totalPages },
        (_, index) => index + 1
      );
      this.loading = false;
    });
  },
  computed: {
    getPageProducts() {
      let pageProducts = [];
      for (
        let i = this.itemsPerPage * (this.currentPage - 1);
        i < this.itemsPerPage * this.currentPage;
        i++
      )
        if (this.products[i]) pageProducts.push(this.products[i]);
      return pageProducts;
    }
  },
  methods: {
    changeCurrentPage(newCurrentPage) {
      this.currentPage = newCurrentPage;
    },
    getTotalPages() {
      let lengthPerItems = parseInt(this.products.length / this.itemsPerPage);
      if (this.products.length % this.itemsPerPage == 0) return lengthPerItems;
      return lengthPerItems + 1;
    }
  }
}; /*  */
</script>