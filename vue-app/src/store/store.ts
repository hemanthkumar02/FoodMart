import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate';
import category from './headerstores/categorystore';
import navItem from './headerstores/subnavstore';
import bannerCards from './bannerstores/bannercardstore';
import bannerSlides from './bannerstores/bannerSlider';
import footerStore from './footerstores/footerstore';
import productsStore from "./Productstores/productstore";
import cardStore from './cardstores/cardstore';
import blogStore from "./blogstores/blogstore";
import contactStore from './contactstores/ContactUs';
import userStore from "./userstores/userStore";

const store = createStore({
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
  modules: {
    category,
    navItem,
    bannerCards,
    bannerSlides,
    footerStore,
    productsStore,
    cardStore,
    blogStore,
    contactStore,
    userStore
  }
});

export default store;
