<template>
  <Banner />
  <Category />
  <NewProducts/>
  <TrendingProducts />
</template>

<script lang="ts">
import Banner from "../components/Banner/Banner.vue";
import Category from '../components/Categories/Category.vue';
import NewProducts from '../components/ProductComponents/NewProducts.vue';
import TrendingProducts from '../components/ProductComponents/TrendingProducts.vue';

export default {
  name: "Home",
  components: {
    Banner,
    Category,
    NewProducts,
    TrendingProducts,
  },
};
console.log("Current Environment:", import.meta.env.MODE);
</script>
