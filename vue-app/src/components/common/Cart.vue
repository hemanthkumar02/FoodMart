<template>
  <div
    class="offcanvas offcanvas-end"
    data-bs-scroll="true"
    tabindex="-1"
    id="offcanvasCart"
    aria-labelledby="My Cart"
    ref="offcanvasCart"
  >
    <div class="offcanvas-header justify-content-center">
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div class="order-md-last">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-primary">Your cart</span>
          <span class="badge bg-primary rounded-pill">{{ cartItems.length }}</span>
        </h4>
        <ul class="list-group mb-3">
          <template v-if="cartItems.length > 0">
            <li class="list-group-item d-flex justify-content-between lh-sm" v-for="cartItem in cartItems" :key="cartItem.id"> 
              <a type="button" @click="removeCartItem(cartItem)"><svg width="24" height="24"><use xlink:href="#bin"></use></svg></a>
              <div>
                <h6 class="my-0">{{ cartItem.title }}</h6>
                <small class="text-body-secondary">Qty: {{ cartItem.quantity }}</small>
              </div>
              <span class="text-body-secondary">${{ cartItem.price }}</span>
            </li>
          </template>
          <template v-else>
            <li class="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 class="my-0">No Cart Items</h6>
              </div>
            </li>
          </template>
          <li class="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong>${{ getTotalPrice }}</strong>
          </li>
        </ul>
        <button class="w-100 btn btn-primary btn-lg" type="submit" :disabled="cartItems.length <= 0 ? true : false">
          Continue to checkout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  methods: {},
  data() {
    return {
      demo: true,
    };
  },
  mounted() {
    this.fetchCartItems();
  },
  methods: {
    fetchCartItems() {
      this.$store.dispatch("productsStore/fetchCartItems");
    },

    removeCartItem(product) {
        this.$store.dispatch("productsStore/removeCartItem", product);
    }
  },
  computed: {
    cartItems() {
      return this.$store.getters["productsStore/getCartItems"];
    },

    getTotalPrice() {
        return this.$store.getters['productsStore/getTotalCartItemsPrice']
    }
  },
};
</script>
