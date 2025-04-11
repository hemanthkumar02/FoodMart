import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Blog from "@/views/Blogs.vue";
import NotFound from "@/views/NotFound.vue";
import Login from '@/views/auth/Login.vue';
import SignUp from '@/views/auth/SignUp.vue';
import Welcome from '@/views/Welcome.vue';

const routes = [
  { path: "/", component: Welcome },
  { path: "/home", component: Home, meta: { requiresAuth: true} },
  { path: "/about", component: About },
  { path: "/blogs", component: Blog },
  { path: "/login", component: Login },
  { path: "/sign-up", component: SignUp },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

export default routes;
