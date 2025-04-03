<template>
<swiper :pagination="true" :modules="modules" class="mySwiper">
    <swiper-slide v-for="slide in slides" :key="slide.id">
      <div class="row banner-content p-5">
      <div class="content-wrapper col-md-7">
        <div class="categories my-3">100% natural</div>
        <h3 class="display-4">{{ slide.title }}</h3>
        <p>{{ slide.content }}</p>
        <a
          href="#"
          class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1 px-4 py-3 mt-3"
          >{{ slide.button }}</a
        >
      </div>
      <div class="img-wrapper col-md-5">
        <img :src="slide.imageUrl" class="img-fluid" />
      </div>
    </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
export default {
  name: "BannerSlider",
  props: ["slides"],
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Pagination],
    }
  }
};
</script>
