<template>
  <router-link to="/">
    <img :src="imageSrc" :alt="imageAlt" class="img-fluid" />
  </router-link>
</template>

<script>
export default {
  name: "Logo",
  props: ["imageSrc", "imageAlt"],
};
</script>
