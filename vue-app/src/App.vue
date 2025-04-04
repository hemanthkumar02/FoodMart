<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
// You can add global setup logic here if needed
import Header from "./layouts/Header.vue";
import Footer from "./layouts/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style></style>
