<template>
  <nav>
    <router-link to="/about">About</router-link>
  </nav>
  <div>
    <h1>Home Page</h1>
  </div>
</template>

<script lang="ts">
export default {
  name: "Home",
};
console.log("Current Environment:", import.meta.env.MODE);
</script>
