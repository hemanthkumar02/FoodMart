<template>
    <div v-for="card in cards" :key="card.id"
    :class="[card.id === 2 ? `banner-ad bg-success-subtle block-${card.id}` : `banner-ad bg-danger block-${card.id}`]"
    :style="{
      background: `url(${card.imageUrl}) no-repeat`,
      backgroundPosition: 'right bottom',
    }"
  >
    <div class="row banner-content p-5">
      <div class="content-wrapper col-md-7">
        <div class="categories sale mb-3 pb-3">{{ card.discountSale }}</div>
        <h3 :class="[card.id === 2 ? 'banner-title' : 'item-title']">{{ card.title }}</h3>
        <a href="#" class="d-flex align-items-center nav-link">
          {{ card.content }} <ArrowIcon />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowIcon from "../icons/ArrowIcon.vue";

export default {
  name: "BannerCard",
  components: {
    ArrowIcon,
  },
  props: ['cards']
};
</script>
