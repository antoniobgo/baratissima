<template lang="pug">
  v-card(
    max-width="300"
    outlined
  )
    v-row.my-3(justify="center")
      h4 {{ product.name }}
    v-divider.my-2
    v-img(
      :src="productImageLink"
      height="180"
      )
    v-card-text
      v-list-item(three-line)
        v-list-item-content
          v-list-item-title
          v-list-item-subtitle {{ product.description }}
          v-list-item-subtitle {{ productPrice }}
          v-list-item-subtitle(v-if="product.on_sale") {{ productSalePrice }}
          v-list-item-subtitle(v-if="product.on_sale") {{ productSalePercentage }}
    v-divider
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
      if (!this.product.on_sale)
        return "R$" + parseFloat(this.product.price).toFixed(2);
      return "De R$" + parseFloat(this.product.price).toFixed(2);
    },
    productImageLink() {
      return this.product.image_link;
    },
    productSalePrice() {
      let salePrice =
        this.product.price -
        this.product.price * (this.product.sale_percentage / 100);
      return "Por apenas R$" + salePrice.toFixed(2) + "!!";
    },
    productSalePercentage() {
      return this.product.sale_percentage + "% OFF!!";
    }
  }
};
</script>
