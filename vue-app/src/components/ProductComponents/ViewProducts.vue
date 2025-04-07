<template>
  <section class="py-5 overflow-hidden">
    <div class="container-fluid">
      <ProductNavHeader
        :title="title"
        :content="content"
        :classForPrev="classForPrev"
        :classForNext="classForNext"
      />
      <div class="row">
        <div class="col-md-12">
          <div class="products-carousel swiper">
            <div class="swiper-wrapper">
              <swiper
                :modules="[Navigation, Pagination, Autoplay]"
                :space-between="30"
                :pagination="false"
                :navigation="{
                  nextEl: '.products-carousel-next',
                  prevEl: '.products-carousel-prev',
                }"
                :breakpoints="{
                  0: { slidesPerView: 1 },
                  576: { slidesPerView: 2 },
                  992: { slidesPerView: 4 },
                }"
              >
                <swiper-slide v-for="product in products" :key="product.id">
                  <DisplayProducts :product="product" />
                </swiper-slide>
              </swiper>
            </div>
          </div>
          <!-- / products-carousel -->
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
import DisplayProducts from "./DisplayProducts.vue";

export default {
  name: "BestSellingProducts",
  props: ['title', 'content', 'classForPrev', 'classForNext', 'products'],
  components: {
    Swiper,
    SwiperSlide,
    DisplayProducts,
    ProductNavHeader,
  },
  setup() {
    return { Navigation, Pagination, Autoplay };
  },
};
</script>
