<template>
  <div class="container py-4">
    <router-link :to="{ name: 'OurCategory' }">
      <button class="btn btn-primary btn-lg">Admin Category</button>
    </router-link>
    <br />
    <router-link :to="{ name: 'MyProduct' }">
      <button class="btn btn-primary btn-lg">Admin Product</button>
    </router-link>
  </div>
</template>
<script>
export default {};
</script>
<style>
.btn {
  margin-bottom: 20px;
}
</style>
