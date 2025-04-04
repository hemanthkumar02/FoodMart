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
          <div class="brand-carousel swiper">
            <div class="swiper-wrapper">
              <swiper
                class="category-carousel"
                :modules="[Navigation, Pagination, Autoplay]"
                :slides-per-view="3"
                :space-between="30"
                :pagination="false"
                :navigation="{
                  nextEl: '.brand-carousel-next',
                  prevEl: '.brand-carousel-prev',
                }"
                :breakpoints="{
                  0: { slidesPerView: 1 }, 
                  576: { slidesPerView: 2 }, 
                  992: { slidesPerView: 3 }, 
                }"
              >
                <swiper-slide
                  v-for="newProduct in newProducts"
                  :key="newProduct.id"
                >
                  <div class="card mb-3 p-3 rounded-4 shadow border-0">
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img
                          :src="newProduct.image"
                          class="img-fluid rounded"
                          :alt="newProduct.title"
                        />
                      </div>
                      <div class="col-md-8">
                        <div class="card-body py-0">
                          <p class="text-muted mb-0">
                            {{ newProduct.subtitle }}
                          </p>
                          <h5 class="card-title">
                            {{ newProduct.title }}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
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
      title: "Newly Arrived Brands",
      content: "View All Categories →",
      classForPrev: "brand-carousel-prev",
      classForNext: "brand-carousel-next",
    };
  },
  mounted() {
    this.fetchCategories();
    this.fetchNewProducts();
  },
  methods: {
    fetchCategories() {
      this.$store.dispatch("productsStore/fetchCategories");
    },

    fetchNewProducts() {
      this.$store.dispatch("productsStore/fetchNewProducts");
    },
  },
  computed: {
    categories() {
      console.log(this.$store.state.productsStore.categories);
      return this.$store.state.productsStore.categories;
    },

    newProducts() {
      return this.$store.state.productsStore.newProducts;
    },
  },
};
</script>
