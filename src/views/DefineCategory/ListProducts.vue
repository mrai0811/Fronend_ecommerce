<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">{{ category.categoryName }}</h4>
        <h5>{{ msg }}</h5>
      </div>
    </div>
    <div class="row">
      <div
        v-for="product of category.products"
        :key="product.id"
        class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex"
      >
        <ProductBox :product="product"></ProductBox>
      </div>
    </div>
  </div>
</template>
<script>
import ProductBox from "@/components/ProductBox.vue";

export default {
  components: { ProductBox },
  name: "ListProducts",
  data() {
    return {
      id: null,
      categoryIndex: null,
      category: {},
      len: 0,
      msg: null,
    };
  },
  props: ["baseURL", "categories", "products"],
  // mounted() {
  //   this.id = this.$route.params.id;
  //   this.categoryIndex = this.categories.findIndex(
  //     (category) => category.id == this.id
  //   );
  //   this.category = this.categories[this.categoryIndex];
  //   this.len = this.category.products.length;
  //   if (this.len == 0) {
  //     this.msg = "no products found";
  //   } else if (this.len == 1) {
  //     this.msg = "only 1 product found";
  //   } else {
  //     this.msg = this.len + " products found";
  //   }
  // },

  mounted() {
    this.id = this.$route.params.id;
    this.categoryIndex = this.categories.findIndex(
      (category) => category.id == this.id
    );

    // Check if a valid categoryIndex was found
    if (this.categoryIndex === -1) {
      this.msg = "Category not found";
      return; // Exit if the category is invalid
    }

    this.category = this.categories[this.categoryIndex];

    // Safely check if products exist
    if (!this.category.products || !Array.isArray(this.category.products)) {
      this.msg = "No products available";
      this.len = 0;
      return;
    }

    this.len = this.category.products.length;

    if (this.len === 0) {
      this.msg = "No products found";
    } else if (this.len === 1) {
      this.msg = "Only 1 product found";
    } else {
      this.msg = `${this.len} products found`;
    }
  },
};
</script>
<style scoped>
h4 {
  font-family: "Roboto", sans-serif;
  color: #484848;
  font-weight: 700;
}

h5 {
  font-family: "Roboto", sans-serif;
  color: #686868;
  font-weight: 300;
}
</style>
