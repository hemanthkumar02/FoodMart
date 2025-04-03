<template>
  <select :class="class">
    <option  v-for="(item, index) in items" :key="index" :value="item">{{ item }}</option>
  </select>
</template>

<script>
    export default {
        name: 'NavDropDown',
        props: ['items', 'class']
    }
</script>
