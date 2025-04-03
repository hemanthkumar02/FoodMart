import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
// import "@/assets/scss/main.scss";
import "@/assets/css/main.css"
import store from "./store/store"; // Correct Vuex import

const app = createApp(App);

app.use(store); // Register Vuex
app.use(router);
app.mount("#app");
