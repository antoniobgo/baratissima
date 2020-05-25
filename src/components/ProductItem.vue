<template lang="pug">
  v-card(
    max-width="300"
    outlined
  )
    v-img(
      :src="productImageLink"
      height="180"
      )
    v-card-text
      v-list-item(three-line)
        v-list-item-content
          v-list-item-title {{ product.name }}
          v-list-item-subtitle R${{ productPrice }}
    v-card-actions
      items-quantity-dialog(:product="product")
</template>

<script>
import ItemsQuantityDialog from "@/components/ItemsQuantityDialog";
export default {
  components: {
    ItemsQuantityDialog
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    productPrice() {
      return parseFloat(this.product.price).toFixed(2);
    },
    productImageLink() {
      return this.product.image_link;
    }
  }
};
</script>
