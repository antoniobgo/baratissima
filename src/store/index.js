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
      for (let i = 0; i < data.quantity; i++)
        state.cartProducts.push(data.product);
    },
  },
  actions: {},
  modules: {},
});
