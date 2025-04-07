<template>
  <section class="py-5">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6" v-for="card in cards" :key="card.id">
          <div
            :class="[card.id == 1 ? 'banner-ad bg-danger mb-3' : 'banner-ad bg-info']"
            :style="{
                backgroundImage: `url('${card.backgroundImage}')`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right bottom',
            }"
          >
            <div class="banner-content p-5">
              <div class="categories text-primary fs-3 fw-bold">
                {{ card.discountText }}
              </div>
              <h3 class="banner-title">{{ card.title }}</h3>
              <p>{{ card.content }}</p>
              <a href="#" class="btn btn-dark text-uppercase">{{ card.buttonText }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Card",
  props: ["cards"],
};
</script>
