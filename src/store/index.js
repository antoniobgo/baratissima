import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartProducts: [],
    count: 0,
    dataProducts: undefined,
    products: undefined,
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
      // eslint-disable-next-line no-debugger
      debugger;
      state.dataProducts = data;
    },
    setProducts(state, data) {
      state.products = data;
    },
  },
  actions: {},
  modules: {},
});
