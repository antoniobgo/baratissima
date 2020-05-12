/* eslint-disable no-debugger */
<template lang="pug">
  v-container(fluid)
    v-row(dense v-if="products")
      product-item.ma-4(
                  v-for="product in products"
                  :product="product"
                  )
    v-row(dense v-if="products")
      product-item.mx-4(
                  v-for="product in products"
                  :product="product"
                  )
</template>

<script>
import ProductItem from "@/components/ProductItem";
import axios from "axios";
export default {
  name: "Home",
  components: { ProductItem },
  data() {
    return {
      products: undefined
    };
  },

  mounted() {
    axios.get("http://localhost:3001/api/products").then(response => {
      this.products = response.data.data;
    });
  },
  watch: {
    // products() {
    // if (this.products) {
    // eslint-disable-next-line no-debugger
    // debugger;
    // }
    // },
  }
};
</script>
