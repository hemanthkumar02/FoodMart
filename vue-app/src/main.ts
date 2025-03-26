import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import "./assets/styles/main.scss";
import store from "./stores/store"; // ✅ Correct Vuex import

const app = createApp(App);
app.use(store); // ✅ Register Vuex
app.use(router);
app.mount("#app");
