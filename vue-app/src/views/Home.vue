<template>
  <Banner />
</template>

<script lang="ts">
import Banner from "../components/Banner/Banner.vue";
export default {
  name: "Home",
  components: {
    Banner,
  },
};
console.log("Current Environment:", import.meta.env.MODE);
</script>
