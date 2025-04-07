import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Blog from "@/views/Blogs.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/blogs", component: Blog },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

export default routes;
