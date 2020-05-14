import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    cartProducts: [],
  },
  mutations: {
    addItemOnCart(state, data) {
      state.count = state.count + data.quantity;
      data.product.bought_quantity += data.quantity;
      if (!state.cartProducts.includes(data.product))
        state.cartProducts.push(data.product);
    },
  },
  actions: {},
  modules: {},
});
