<template>
  <button v-bind:type="buttonType" :class="buttonClass">
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: ["buttonType", "buttonClass", "buttonText"],
};
</script>

<style></style>
