<template>
  <Banner />
  <Category />
  <NewProducts />
  <TrendingProducts />
  <Card :cards="cards" />
  <ViewProducts
    :title="viewProducts.title"
    :content="viewProducts.content"
    :classForPrev="viewProducts.classForPrev"
    :classForNext="viewProducts.classForNext"
    :products="products"
  />
  <ViewProducts 
    :title="justArrived.title"
    :content="justArrived.content"
    :classForPrev="justArrived.classForPrev"
    :classForNext="justArrived.classForNext"
    :products="products"
  />
  <AboutUs />
  <RecommendedProducts/>
</template>

<script lang="ts">
import Banner from "../components/Banner/Banner.vue";
import Category from "../components/Categories/Category.vue";
import NewProducts from "../components/ProductComponents/NewProducts.vue";
import TrendingProducts from "../components/ProductComponents/TrendingProducts.vue";
import Card from "../components/common/Card.vue";
import ViewProducts from "../components/ProductComponents/ViewProducts.vue";
import RecommendedProducts from '../components/ProductComponents/RecommendedProducts.vue';
import AboutUs from '../components/common/AboutUs.vue';

export default {
  name: "Home",
  components: {
    Banner,
    Category,
    NewProducts,
    TrendingProducts,
    Card,
    ViewProducts,
    AboutUs,
    RecommendedProducts,
  },
  data() {
    return {
      viewProducts: {
        title: "Best selling products",
        content: "View All Categories →",
        classForPrev: "products-carousel-prev",
        classForNext: "products-carousel-next",
      },
      justArrived: {
        title: "Just arrived",
        content: "View All Categories →",
        classForPrev: "products-carousel-prev",
        classForNext: "products-carousel-next",
      },
    };
  },
  methods: {
    fetchBestSellingProducts() {
      this.$store.dispatch("productsStore/fetchBestSellingProducts");
    },
    fetchCards() {
      this.$store.dispatch("cardStore/fetchCards");
    },
  },
  mounted() {
    this.fetchCards();
    this.fetchBestSellingProducts();
  },
  computed: {
    products() {
      return this.$store.state.productsStore.bestSellingProducts;
    },
    cards() {
      return this.$store.state.cardStore.cards;
    },
  },
};
console.log("Current Environment:", import.meta.env.MODE);
</script>
