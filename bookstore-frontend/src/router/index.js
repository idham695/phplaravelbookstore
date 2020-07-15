import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/categories",
      name: "categories",
      component: () => import("../views/Categories.vue"),
    },
    {
      path: "/category/:slug",
      name: "category",
      component: () => import("../views/Category.vue"),
    },
    {
      path: "/books",
      name: "books",
      component: () => import("../views/Books.vue"),
    },
    {
      path: "/book/:slug",
      name: "book",
      component: () => import("../views/Book.vue"),
    },
    {
      path: "*",
      redirect: {
        name: "home",
      },
    },
  ],
});

export default router;
