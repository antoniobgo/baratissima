import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AddProduct from "../views/AddProduct.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add-product",
    name: "Add Product",
    component: AddProduct
  }
];

const router = new VueRouter({
  routes,
});

export default router;
