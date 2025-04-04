<template>
  <div>
    <input
      :class="cssClass"
      :type="inputType"
      :placeholder="inputPlaceholder"
      :aria-label="inputPlaceholder"
    />
  </div>
</template>

<script>
export default {
    name: 'TextInput',
    props: ['inputType', 'inputPlaceholder', 'cssClass']
};
</script>

<style scoped></style>
