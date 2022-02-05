import { RouteRecordRaw, createWebHashHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: "Meeko" }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
