<template>
  <select class="form-select border-0 bg-transparent">
    <option>All Categories</option>
    <option
      v-for="category in categories"
      :key="category.id"
      :value="category.name"
    >
      {{ category.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "Categories",
  props: ["categories"],
};
</script>
