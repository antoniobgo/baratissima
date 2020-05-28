import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartProducts: [],
    count: 0,
    dataProducts: undefined,
    products: undefined,
    productTypeToShow: "sale",
  },
  mutations: {
    addItemOnCart(state, data) {
      if (!state.cartProducts.includes(data.product))
        state.cartProducts.push(data.product);
      state.count = state.count + data.quantity;
      data.product.bought_quantity += data.quantity;
      data.product.quantity -= data.quantity;
    },
    incrementProductBoughtQuantity(state, data) {
      state.count++;
      data.product.bought_quantity++;
      data.product.quantity--;
    },
    decrementProductBoughtQuantity(state, data) {
      state.count--;
      data.product.bought_quantity--;
      data.product.quantity++;
      if (data.product.bought_quantity == 0) {
        let index = state.cartProducts.findIndex((productToWithdraw) => {
          return productToWithdraw.id == data.product.id;
        });
        state.cartProducts.splice(index, 1);
      }
    },
    setDataProducts(state, data) {
      state.dataProducts = data;
    },
    setProducts(state, data) {
      state.products = data;
    },
    showElectronicProducts(state) {
      state.products = state.dataProducts.filter((product) => {
        return product.product_type == "electronic";
      });
      state.productTypeToShow = "electronic";
    },
    showBookProducts(state) {
      state.products = state.dataProducts.filter((product) => {
        return product.product_type == "book";
      });
      state.productTypeToShow = "book";
    },
    showSaleProducts(state) {
      state.products = state.dataProducts.filter((product) => {
        return product.on_sale == true;
      });
      state.productTypeToShow = "sale";
    },
    showHigherPrices(state) {
      function comparePrice(a, b) {
        if (!a.on_sale && !b.on_sale) {
          if (parseFloat(a.price) < parseFloat(b.price)) return 1;
          else if (parseFloat(a.price) > parseFloat(b.price)) return -1;
          else return 0;
        } else if (a.on_sale && !b.on_sale) {
          let aSalePrice = a.price - a.price * (a.sale_percentage / 100);
          if (parseFloat(aSalePrice) < parseFloat(b.price)) return 1;
          else if (parseFloat(aSalePrice) > parseFloat(b.price)) return -1;
          else return 0;
        } else if (b.on_sale && !a.on_sale) {
          let bSalePrice = b.price - b.price * (b.sale_percentage / 100);
          if (parseFloat(a.price) < parseFloat(bSalePrice)) return 1;
          else if (parseFloat(a.price) > parseFloat(bSalePrice)) return -1;
          else return 0;
        } else {
          let aSalePrice = a.price - a.price * (a.sale_percentage / 100);
          let bSalePrice = b.price - b.price * (b.sale_percentage / 100);
          if (parseFloat(aSalePrice) < parseFloat(bSalePrice)) return 1;
          else if (parseFloat(aSalePrice) > parseFloat(bSalePrice)) return -1;
          else return 0;
        }
      }
      state.products = state.products.sort(comparePrice);
    },
    showSmallerPrices(state) {
      function comparePrice(a, b) {
        if (!a.on_sale && !b.on_sale) {
          if (parseFloat(a.price) > parseFloat(b.price)) return 1;
          else if (parseFloat(a.price) < parseFloat(b.price)) return -1;
          else return 0;
        } else if (a.on_sale && !b.on_sale) {
          let aSalePrice = a.price - a.price * (a.sale_percentage / 100);
          if (parseFloat(aSalePrice) > parseFloat(b.price)) return 1;
          else if (parseFloat(aSalePrice) < parseFloat(b.price)) return -1;
          else return 0;
        } else if (b.on_sale && !a.on_sale) {
          let bSalePrice = b.price - b.price * (b.sale_percentage / 100);
          if (parseFloat(a.price) > parseFloat(bSalePrice)) return 1;
          else if (parseFloat(a.price) < parseFloat(bSalePrice)) return -1;
          else return 0;
        } else {
          let aSalePrice = a.price - a.price * (a.sale_percentage / 100);
          let bSalePrice = b.price - b.price * (b.sale_percentage / 100);
          if (parseFloat(aSalePrice) > parseFloat(bSalePrice)) return 1;
          else if (parseFloat(aSalePrice) < parseFloat(bSalePrice)) return -1;
          else return 0;
        }
      }
      state.products = state.products.sort(comparePrice);
    },
  },
  actions: {},
  modules: {},
});
