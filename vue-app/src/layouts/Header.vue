<template>
  <Cart />
  <div
    class="offcanvas offcanvas-end"
    data-bs-scroll="true"
    tabindex="-1"
    id="offcanvasSearch"
    aria-labelledby="Search"
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
          <span class="text-primary">Search</span>
        </h4>
        <form
          role="search"
          action="index.html"
          method="get"
          class="d-flex mt-3 gap-0"
        >
          <input
            class="form-control rounded-start rounded-0 bg-light"
            type="email"
            placeholder="What are you looking for?"
            aria-label="What are you looking for?"
          />
          <button class="btn btn-dark rounded-end rounded-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  </div>
  <header>
    <div class="container-fluid">
      <div class="row py-3 border-bottom">
        <div class="col-sm-4 col-lg-3 text-center text-sm-start">
          <div class="main-logo">
            <Logo :imageSrc="logo.link" :imageAlt="logo.alt" />
          </div>
        </div>

        <div
          class="col-sm-6 offset-sm-2 offset-md-0 col-lg-5 d-none d-lg-block"
        >
          <div class="search-bar row bg-light p-2 my-2 rounded-4">
            <div class="col-md-4 d-none d-md-block">
              <Categories :categories="categories" />
            </div>
            <div class="col-11 col-md-7">
              <SearchBar />
            </div>
            <div class="col-1">
              <SearchIcon />
            </div>
          </div>
        </div>
        <div
          class="col-sm-8 col-lg-4 d-flex justify-content-end gap-5 align-items-center mt-4 mt-sm-0 justify-content-center justify-content-sm-end"
        >
          <ul class="d-flex justify-content-end list-unstyled m-0">
            <li>
              <a href="#" class="rounded-circle bg-light p-2 mx-1">
                <UserIcon />
              </a>
              <p class="text-center" v-text="displayUser"></p>
            </li>
            <li>
              <a href="#" class="rounded-circle bg-light p-2 mx-1">
                <HeartIcon />
              </a>
            </li>
            <li class="d-lg-none">
              <a
                href="#"
                class="rounded-circle bg-light p-2 mx-1"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasCart"
                aria-controls="offcanvasCart"
              >
                <CartIcon />
              </a>
            </li>
            <li class="d-lg-none">
              <a
                href="#"
                class="rounded-circle bg-light p-2 mx-1"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasSearch"
                aria-controls="offcanvasSearch"
              >
                <SearchIcon />
              </a>
            </li>
          </ul>

          <div class="cart text-end d-none d-lg-block dropdown">
            <button
              class="border-0 bg-transparent d-flex flex-column gap-2 lh-1"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasCart"
              aria-controls="offcanvasCart"
              @click="getCartItems"
            >
              <span class="fs-6 text-muted dropdown-toggle">Your Cart</span>
              <span class="cart-total fs-5 fw-bold"
                >${{ getTotalPrice }}.00</span
              >
            </button>
          </div>
        </div>
      </div>
    </div>
    <SubHeader v-if="navItems.length" :items="navItems" />
  </header>
</template>

<script>
import Logo from "../components/header/Logo.vue";
import logoImage from "@/assets/images/logo.png";
import Categories from "../components/header/Categories.vue";
import SearchIcon from "../components/icons/SearchIcon.vue";
import SearchBar from "../components/header/SearchBar.vue";
import UserIcon from "../components/icons/UserIcon.vue";
import CartIcon from "../components/icons/CartIcon.vue";
import HeartIcon from "../components/icons/HeartIcon.vue";
import SubHeader from "./SubHeader.vue";
import Cart from "../components/common/Cart.vue";

export default {
  name: "Header",
  components: {
    Logo,
    Categories,
    SearchIcon,
    SearchBar,
    UserIcon,
    CartIcon,
    Cart,
    HeartIcon,
    SubHeader,
  },
  data() {
    return {
      showSideBar: false,
      logo: {
        link: logoImage,
        alt: "logo",
      },
    };
  },
  methods: {
    fetchCategories() {
      this.$store.dispatch("category/fetchCategories");
    },
    fetchNavItems() {
      this.$store.dispatch("navItem/fetchNavItems");
    },
    getCartItems() {
      this.$store.getters["productsStore/getCartItems"];
    }
  },
  mounted() {
    this.fetchCategories();
    this.fetchNavItems();
  },
  computed: {
    categories() {
      return this.$store.state.category.categories;
    },
    navItems() {
      return this.$store.state.navItem.navItems;
    },
    getTotalPrice() {
      return this.$store.getters["productsStore/getTotalCartItemsPrice"];
    },
    displayUser() {
      const user = this.$store.getters["userStore/isAuthenticated"][0];
      if (user == null) return "";
      return user.name;
    },
  },
};
</script>

<style scoped></style>
