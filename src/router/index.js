import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "main-page",
    component: () => import("../views/MainPage.vue"),
  },
  {
    path: "/table-game",
    name: "table-game",
    component: () => import("../views/TableGame.vue"),
  },
  {
    path: "/account-page",
    name: "account-page",
    component: () => import("../views/АccountPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
