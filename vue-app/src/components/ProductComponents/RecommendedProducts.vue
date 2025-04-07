<template>
    <section class="py-5">
      <div class="container-fluid">
        <h2 class="my-5">People are also looking for</h2>
        <a href="#" class="btn btn-warning me-2 mb-2" v-for="product in otherProducts" :key="product.id">{{ product.product }}</a>
      </div>
    </section>
</template>

<script>

export default {
    name: 'RecommendedProducts',
    mounted() {
        this.fetchOtherProducts()
    },
    methods: {
        fetchOtherProducts() {
            this.$store.dispatch('productsStore/fetchOtherProducts')
        }
    },
    computed: {
        otherProducts() {
            return this.$store.state.productsStore.recommendProducts
        }
    }
}
</script>
