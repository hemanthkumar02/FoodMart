<template>
  <div class="row">
    <div class="col-md-12">
      <div class="section-header d-flex flex-wrap justify-content-between mb-5">
        <h2 class="section-title">{{ title }}</h2>

        <div class="d-flex align-items-center">
          <a href="#" class="btn-link text-decoration-none">{{ content }}</a>
          <div class="swiper-buttons">
            <button
              :class="[
                'swiper-next',
                classForPrev,
                'btn',
                'btn-yellow m-1',
                { 'swiper-button-disabled': isBeginning },
              ]"
              :disabled="isBeginning"
              :aria-disabled="isBeginning"
              aria-label="Previous slide"
              tabindex="-1"
            >
              ❮
            </button>
            <button
              :class="[
                'swiper-next',
                classForNext,
                'btn',
                'btn-yellow',
                { 'swiper-button-disabled': isEnd },
              ]"
              :disabled="isEnd"
              :aria-disabled="isEnd"
              aria-label="Next slide"
              tabindex="-1"
            >
              ❯
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductNavHeader",
  props: ["title", "content", "classForNext", "classForPrev"],
  data() {
    return {
      swiperInstance: null,
      isBeginning: true,
      isEnd: false,
    };
  },
  methods: {
    onSwiperInit(swiper) {
      this.swiperInstance = swiper;
      this.isBeginning = swiper.isBeginning;
      this.isEnd = swiper.isEnd;
    },
    onSlideChange() {
      if (this.swiperInstance) {
        this.isBeginning = this.swiperInstance.isBeginning;
        this.isEnd = this.swiperInstance.isEnd;
      }
    },
  },
};
</script>
