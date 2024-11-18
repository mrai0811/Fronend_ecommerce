<template>
  <MyNavbar :cartCount="cartCount" @resetCartCount="resetCartCount" />

  <router-view
    v-if="categories && products"
    style="min-height: 60vh"
    :baseURL="baseURL"
    :categories="categories"
    :products="products"
    @fetchData="fetchData"
  ></router-view>
  <MyFooter />
</template>
<script>
import axios from "axios";
import MyNavbar from "./components/MyNavbar.vue";
import MyFooter from "./components/MyFooter.vue";
export default {
  components: { MyNavbar, MyFooter },
  data() {
    return {
      baseURL: "https://backend-ecommerce-irs1.onrender.com/",
      // baseURL: "http://localhost:8085/",
      products: null,
      categories: null,
      cartCount: 0,
    };
  },
  methods: {
    async fetchData() {
      await axios
        .get(this.baseURL + "category/")
        .then((res) => {
          this.categories = res.data;
        })
        .catch((err) => console.log("err", err));

      //api call to get the products
      await axios
        .get(this.baseURL + "product/")
        .then((res) => {
          this.products = res.data;
        })
        .catch((err) => console.log("err", err));

      if (this.token) {
        axios
          .get(`${this.baseURL}cart/?token=${this.token}`)
          .then((res) => {
            const result = res.data;
            this.cartCount = result.cartItems.length;
          })
          .catch((err) => console.log("err", err));
      }
    },
    resetCartCount() {
      this.cartCount = 0;
    },
  },
  mounted() {
    this.token = localStorage.getItem("token");
    this.fetchData();
  },
};
</script>

<style>
html {
  overflow-y: scroll;
}
</style>
