import { createStore } from "vuex";
import category from './headerstores/categorystore';
import navItem from './headerstores/subnavstore';
import bannerCards from './bannerstores/bannercardstore';
import bannerSlides from './bannerstores/bannerSlider';
import footerStore from './footerstores/footerstore';

const store = createStore({
  modules: {
    category,
    navItem,
    bannerCards,
    bannerSlides,
    footerStore,
  }
});

export default store;
