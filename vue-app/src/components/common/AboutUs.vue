<template>
    <section class="py-5 my-5">
      <div class="container-fluid">

        <div class="bg-warning py-5 rounded-5" style="background-image: url('images/bg-pattern-2.png') no-repeat;">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <img :src="aboutUs.image" alt="phone" class="image-float img-fluid">
              </div>
              <div class="col-md-8">
                <h2 class="my-5">{{ aboutUs.title }}</h2>
                <p>{{ aboutUs.content }}</p>
                <div class="d-flex gap-2 flex-wrap">
                  <img :src="aboutUs.appStore" alt="app-store">
                  <img :src="aboutUs.googlePlay" alt="google-play">
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
</template>

<script>

export default {
    name: 'AboutUs',
    methods: {
        fetchAboutUs() {
            this.$store.dispatch('cardStore/fetchAboutUs')
        }
    },
    computed: {
        aboutUs() {
            return this.$store.state.cardStore.aboutUs;
        }
    },
    mounted() {
        this.fetchAboutUs();
    }
}
</script>
