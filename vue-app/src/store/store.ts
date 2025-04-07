import { createStore } from "vuex";
import category from './headerstores/categorystore';
import navItem from './headerstores/subnavstore';
import bannerCards from './bannerstores/bannercardstore';
import bannerSlides from './bannerstores/bannerSlider';
import footerStore from './footerstores/footerstore';
import productsStore from "./Productstores/productstore";
import cardStore from './cardstores/cardstore';
import blogStore from "./blogstores/blogstore";
import contactStore from './contactstores/ContactUs';

const store = createStore({
  modules: {
    category,
    navItem,
    bannerCards,
    bannerSlides,
    footerStore,
    productsStore,
    cardStore,
    blogStore,
    contactStore
  }
});

export default store;
