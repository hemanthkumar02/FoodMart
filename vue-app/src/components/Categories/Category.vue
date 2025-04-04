<template>
  <section class="py-5 overflow-hidden">
    <div class="container-fluid">
      <ProductNavHeader
        :title="this.title"
        :content="this.content"
        :classForPrev="this.classForPrev"
        :classForNext="this.classForNext"
      />
      <div class="row">
        <div class="col-md-12">
          <div class="category-carousel swiper">
            <div class="swiper-wrapper">
              <swiper
                class="category-carousel"
                :modules="[Navigation, Pagination, Autoplay]"
                :slides-per-view="4"
                :space-between="30"
                :pagination="false"
                :navigation="{
                  nextEl: '.category-carousel-next',
                  prevEl: '.category-carousel-prev',
                }"
                :breakpoints="{
                  0: { slidesPerView: 1 }, 
                  576: { slidesPerView: 2 }, 
                  992: { slidesPerView: 4 }, 
                }"
              >
                <swiper-slide v-for="category in categories" :key="category.id">
                  <a href="index.html" class="nav-link category-item">
                    <img :src="category.image" :alt="category.title" />
                    <h3 class="category-title">{{ category.title }}</h3>
                  </a>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductNavHeader from "../common/ProductNavHeader.vue";

export default {
  name: "Category",
  components: {
    Swiper,
    SwiperSlide,
    ProductNavHeader,
  },
  setup() {
    return { Navigation, Pagination, Autoplay };
  },
  data() {
    return {
      title: "Category",
      content: "View All Categories →",
      classForPrev: "category-carousel-prev",
      classForNext: "category-carousel-next",
    };
  },
  mounted() {
    this.fetchCategories();
  },
  methods: {
    fetchCategories() {
      this.$store.dispatch("productsStore/fetchCategories");
    },
  },
  computed: {
    categories() {
      console.log(this.$store.state.productsStore.categories);
      return this.$store.state.productsStore.categories;
    },
  },
};
</script>
