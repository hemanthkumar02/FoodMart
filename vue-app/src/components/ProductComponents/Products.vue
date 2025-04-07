<template>
  <div class="col" v-for="product in products" :key="product.id">
    <div class="product-item">
      <span class="badge bg-success position-absolute m-3" v-if="product.discount != 0">{{ product.discount }}%</span>
      <a href="#" class="btn-wishlist"
        ><svg width="24" height="24"><use xlink:href="#heart"></use></svg  //Heart component
      ></a>
      <figure>
        <a href="index.html" title="Product Title">
          <img :src="product.image" class="tab-image" />
        </a>
      </figure>
      <h3>{{ product.title }}</h3>
      <span class="qty">1 Unit</span
      ><span class="rating"
        ><svg width="24" height="24" class="text-primary">
          <use xlink:href="#star-solid"></use>  //rating component
        </svg>
        {{ product.rating }}</span
      >
      <span class="price">${{ product.price }}</span>
      <div class="d-flex align-items-center justify-content-between">
        <div class="input-group product-qty">
          <span class="input-group-btn">
            <button
              type="button"
              class="quantity-left-minus btn btn-danger btn-number"
              data-type="minus"
              @click="decreaseQuantity(product)"
            >
              <svg width="16" height="16"><use xlink:href="#minus"></use></svg>
            </button>
          </span>
          <input
            type="text"
            :id="product.id"
            :name="product.title"
            class="form-control input-number"
            v-model="product.quantity"
          />
          <span class="input-group-btn">
            <button
              type="button"
              class="quantity-right-plus btn btn-success btn-number"
              data-type="plus"
              @click="increaseQuantity(product)"
            >
              <svg width="16" height="16"><use xlink:href="#plus"></use></svg>
            </button>
          </span>
        </div>
        <a href="#" class="nav-link">Add to Cart</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'Products',
    props: ['products'],
    data() {
        return {
            quantity: 1
        }
    },
    methods: {
        increaseQuantity(product) {
            product.quantity++;
        },

        decreaseQuantity(product) {
            if(product.quantity > 1) {
                product.quantity--;
            }
        }
    }
}
</script>
