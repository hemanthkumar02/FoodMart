<template>
  <div>
    <h5 class="widget-title">{{ newsLetter.title }}</h5>
    <p>{{ newsLetter.content }}</p>
  </div>
</template>

<script>
export default {
    name: 'NewsLetter',
    props: ['newsLetter']
};
</script>

<style scoped></style>
