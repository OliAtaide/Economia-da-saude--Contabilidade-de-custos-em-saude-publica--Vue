import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SlideView from "@/views/SlideView.vue";
import EndView from "@/views/EndView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  { path: "/:id", component: SlideView },
  {
    path: "/end",
    name: "end",
    component: EndView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
