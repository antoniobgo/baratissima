import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    cartProducts: [],
  },
  mutations: {
    addItemOnCart(state, product) {
      state.count++;
      state.cartProducts.push(product);
    },
  },
  actions: {},
  modules: {},
});
