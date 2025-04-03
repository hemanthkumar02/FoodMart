<template>
  <div>
    <button v-bind:type="buttonType" :class="buttonClass">
      {{ buttonText }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: ['buttonType', 'buttonClass', 'buttonText']
};
</script>

<style>
</style>
