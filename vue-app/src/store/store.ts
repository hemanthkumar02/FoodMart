import { createStore } from "vuex";
import category from './headerstores/categorystore';
import navItem from './headerstores/subnavstore';
import bannerCards from './bannerstores/bannercardstore';
import bannerSlides from './bannerstores/bannerSlider';
import footerStore from './footerstores/footerstore';
import productsStore from "./Productstores/productstore";

const store = createStore({
  modules: {
    category,
    navItem,
    bannerCards,
    bannerSlides,
    footerStore,
    productsStore,
  }
});

export default store;
