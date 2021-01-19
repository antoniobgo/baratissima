import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AddProduct from "../views/AddProduct.vue";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";
import MyAccount from "../views/MyAccount.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp
  },
  {
    path: "/add-product",
    name: "Add Product",
    component: AddProduct
  },
  {
    path: "/account",
    name: "MyAccount",
    component: MyAccount
  }
];

const router = new VueRouter({
  routes,
});

export default router;
