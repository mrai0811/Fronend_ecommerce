<template>
  <div class="container">
    <div class="row pt-5">
      <div class="col-md-1"></div>
      <div class="col-md-4 col-12">
        <img :src="product.imageURL" class="img-fluid" />
      </div>
      <div class="col-md-6 col-12 pt-3 pt-md-0">
        <h4>{{ product.name }}</h4>
        <h6 class="category font-italic">{{ category.categoryName }}</h6>
        <h6 class="font-weight-bold">${{ product.price }}</h6>
        <p>
          {{ product.description }}
        </p>
        <div class="d-flex flex-row justify-content-between">
          <div class="input-group col-md-3 col-4 p-0">
            <div class="input-group-prepend">
              <span class="input-group-text">Quantity</span>
            </div>
            <input type="number" v-model="quantity" class="form-control" />
          </div>
          <div class="input-group col-md-3 col-4 p-0">
            <button class="btn" id="add-to-cart-button" @click="addToCart">
              Add to Cart
            </button>
          </div>
        </div>
        <div class="features pt-3">
          <h5><strong>Features</strong></h5>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Officia quas, officiis eius magni error magnam voluptatem</li>
            <li>nesciunt quod! Earum voluptatibus quaerat dolorem doloribus</li>
            <li>molestias ipsum ab, ipsa consectetur laboriosam soluta et</li>
            <li>ut doloremque dolore corrupti, architecto iusto beatae.</li>
          </ul>
        </div>
        <button
          id="wishlist-button"
          class="btn mr-3 p-1 py-0"
          @click="addToWishlist"
        >
          {{ wishListString }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import swal from "sweetalert";
export default {
  data() {
    return {
      product: {},
      category: {},
      quantity: 1,
      wishListString: "Add to wishlist",
    };
  },
  props: ["baseURL", "products", "categories"],
  methods: {
    addToWishlist() {
      if (!this.token) {
        swal({
          text: "please log in to add item in wishlist",
          icon: "error",
        });
        return;
      }
      axios
        .post(`${this.baseURL}wishlist/add?token=${this.token}`, {
          id: this.product.id,
        })
        .then((res) => {
          if (res.status === 201) {
            this.wishListString = "Added to wishlist";
            swal({
              text: "Added to wishlist",
              icon: "success",
            });
          }
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
    addToCart() {
      if (!this.token) {
        swal({
          text: "please log in to add item in cart",
          icon: "error",
        });
        return;
      }

      axios
        .post(`${this.baseURL}/cart/add?token=${this.token}`, {
          productId: this.id,
          quantity: this.quantity,
        })
        .then((res) => {
          if (res.status === 201) {
            swal({
              text: "Product added in cart",
              icon: "success",
            });
            this.$emit("fetchData");
          }
        })
        .catch((err) => console.log("err", err));
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.product = this.products.find((product) => product.id == this.id);
    this.category = this.categories.find(
      (category) => category.id == this.product.categoryId
    );
    this.token = localStorage.getItem("token");
  },
};
</script>
<style>
.category {
  font-weight: 400;
}
#wishlist-button {
  background-color: b9b9b9;
}
#add-to-cart-button {
  background-color: #febd69;
}
</style>
