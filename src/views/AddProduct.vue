<template lang="pug">
  v-card(outlined)
    v-form
      v-col
        v-text-field(
          v-model="form.name"
          label="Nome"
        )
      v-col
        v-text-field(
          v-model="form.image_link"
          label="Image Link"
        )
      v-col
        v-textarea(
          v-model="form.description"
          label="Descricao"
        )
      v-col
        v-row
          v-col(cols="1")
            v-checkbox(
              v-model="form.sale"
              label="On Sale"
            )
          v-col(cols="2")
            v-text-field(
              v-model="form.price"
              label="Price"
            )
          v-col(cols="2")
            v-combobox(
              v-model="form.product_type"
              label="Product type"
              :items="product_types"
              outlined
              dense
              )
          v-col(cols="2")
            v-text-field(
              v-model="form.sale_percentage"
              label="Sale percentage"
              :disabled="!sale"
            )
        v-col(cols="2")
          v-row
            v-btn(
              outlined
              @click="addProduct"
            ) Adicionar Produto
</template>

<script>
export default {
  name: "AddProduct",
  data() {
    return {
      sale: false,
      product_types: ['Electronic', 'Book'],
      product_type: undefined,
      form: {
        sale: false,
        product_type: undefined,
        description: undefined,
        image_link: undefined,
        name: undefined,
        price: undefined,
        sale_percentage: undefined
      }
    }
  },
  methods: {
    addProduct() {

    }
  }
}
</script>
