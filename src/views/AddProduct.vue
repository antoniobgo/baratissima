<template lang="pug">
  v-card(outlined)
    v-form
      v-col
        v-text-field(
          label="Nome"
        )
      v-col
        v-text-field(
          label="Image Link"
        )
      v-col
        v-textarea(
          label="Descricao"
        )
      v-col
        v-row
          v-col(cols="1")
            v-checkbox(
              v-model="sale"
              label="On Sale"
            )
          v-col(cols="2")
            v-text-field(
              label="Price"
            )
          v-col(cols="2")
            v-combobox(
              label="Product type"
              v-model="product_type"
              :items="product_types"
              outlined
              dense
              )
          v-col(cols="2")
            v-text-field(
              label="Sale percentage"
              :disabled="!sale"
            )
</template>

<script>
export default {
  name: "AddProduct",
  data() {
    return {
      sale: false,
      product_types: ['Electronic', 'Book'],
      product_type: undefined
    }
  },
  methods: {
  }
}
</script>
