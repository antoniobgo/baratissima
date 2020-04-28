<template lang="pug">
v-container
  v-row
    product-item.mx-2
    product-item.mx-2
    product-item.mx-2
    product-item.mx-2
    product-item.mx-2
</template>

<script>
import ProductItem from "@/components/ProductItem";
export default {
  name: "Home",
  components: { ProductItem }
};
</script>
