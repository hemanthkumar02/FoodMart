import { createApp } from "vue";
import App from "./App.vue"; // Import your main App component
import router from "./router/index";
import { createPinia } from "pinia";
import "./assets/styles/main.scss";

const app = createApp(App); // Mount the App component
app.use(createPinia());
app.use(router);
app.mount("#app");
