import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
// import "@/assets/scss/main.scss";
import "@/assets/css/main.css"
import store from "./store/store"; // Correct Vuex import

const app = createApp(App);

router.beforeEach((to, from, next) => {
    const isAuthenticated = store.getters['userStore/isAuthenticated'][0];
    if(to.meta.requiresAuth && !isAuthenticated) {
        next('/login');
    } else {
        next();
    }
})

app.use(store); 
app.use(router);
app.mount("#app");
