import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddCategory from "@/views/DefineCategory/AddCategory.vue";
import OurCategory from "@/views/DefineCategory/OurCategory.vue";
import MyAdmin from "@/views/MyAdmin.vue";
import MyProduct from "@/views/DefineProduct/MyProduct.vue";
import AddProduct from "@/views/DefineProduct/AddProduct.vue";
import EditCategory from "@/views/DefineCategory/EditCategory.vue";
import EditProduct from "@/views/DefineProduct/EditProduct.vue";
import ShowDetails from "@/views/DefineProduct/ShowDetails.vue";
import ListProducts from "@/views/DefineCategory/ListProducts.vue";
import MySignUp from "@/views/MySignUp.vue";
import MySignIn from "@/views/MySignIn.vue";
import WishList from "@/views/DefineProduct/WishList.vue";
import MyCart from "@/views/MyCart.vue";
import MySuccess from "@/views/Payment/MySuccess.vue";
import MyFailed from "@/views/Payment/MyFailed.vue";
import MyCheckout from "@/views/Checkout/MyCheckout.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/category/show/:id",
    name: "ListProducts",
    component: ListProducts,
  },
  {
    path: "/admin/category/add",
    name: "AddCategory",
    component: AddCategory,
  },
  {
    path: "/admin/category",
    name: "OurCategory",
    component: OurCategory,
  },
  //admin homepage
  {
    path: "/admin",
    name: "MyAdmin",
    component: MyAdmin,
  },
  {
    path: "/admin/product",
    name: "MyProduct",
    component: MyProduct,
  },
  {
    path: "/admin/product/new",
    name: "AddProduct",
    component: AddProduct,
  },
  {
    path: "/admin/category/:id",
    name: "EditCategory",
    component: EditCategory,
  },
  {
    path: "/admin/product/:id",
    name: "EditProduct",
    component: EditProduct,
  },
  {
    path: "/product/show/:id",
    name: "ShowDetails",
    component: ShowDetails,
  },
  {
    path: "/signup",
    name: "MySignUp",
    component: MySignUp,
  },
  {
    path: "/signin",
    name: "MySignIn",
    component: MySignIn,
  },
  {
    path: "/wishlist",
    name: "WishList",
    component: WishList,
  },
  {
    path: "/cart",
    name: "MyCart",
    component: MyCart,
  },
  {
    path: "/payment/success",
    name: "MySuccess",
    component: MySuccess,
  },
  {
    path: "/payment/failed",
    name: "MyFailed",
    component: MyFailed,
  },
  {
    path: "/checkout",
    name: "MyCheckout",
    component: MyCheckout,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
