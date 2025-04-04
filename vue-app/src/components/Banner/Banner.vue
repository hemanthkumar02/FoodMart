<template>
  <section
    class="py-3"
    :style="{
      backgroundImage: `url(${backgroundImagePattern})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }"
  >
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="banner-blocks">
            <div class="banner-ad large bg-info block-1">
              <div class="swiper main-swiper">
                <div class="swiper-wrapper">
                  <BannerSlider :slides="slides" />

                  <div class="swiper-pagination"></div>
                </div>
              </div>
            </div>
            <BannerCard :cards="cards" />
            <!-- / Banner Blocks -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AdImage1 from "@/assets/images/ad-image-1.png";
import AdImage2 from "@/assets/images/ad-image-2.png";
import BannerCard from "./BannerCard.vue";
import BannerSlider from "./BannerSlider.vue";
import productThumbnail1 from "@/assets/images/product-thumb-1.png";
import productThumbnail2 from "@/assets/images/product-thumb-2.png";
import backgroundPattern from '@/assets/images/background-pattern.jpg';

export default {
  name: "Banner",
  components: {
    BannerCard,
    BannerSlider,
  },
  data() {
    return {
      backgroundImagePattern: backgroundPattern,
    };
  },
  mounted() {
    this.fetchBannerCards()
    this.fetchBannerSlides()
  },
  methods: {
    fetchBannerCards() {
      this.$store.dispatch('bannerCards/fetchCards')
    },

    fetchBannerSlides() {
      this.$store.dispatch('bannerSlides/fetchSlides')
    }
  },
  computed: {
    cards() {
      return this.$store.state.bannerCards.cards
    },

    slides() {
      return this.$store.getters['bannerSlides/getSlides']
    }
  }
};
</script>
