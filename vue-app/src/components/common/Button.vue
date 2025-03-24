<script setup lang="ts">
defineProps<{ label: string }>();
</script>

<template>
  <button class="btn">{{ label }}</button>
</template>

<style scoped>
.btn {
  padding: 10px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
}
</style>
