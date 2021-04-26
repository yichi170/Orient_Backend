import Vue from "vue";
import VueRouter from "vue-router";
import Select from "../views/Select.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
    props: (route) => ({ from: route.query.group }),
  },
  {
    path: "/",
    name: "Select",
    component: Select,
  },
  {
    path: "/score",
    name: "Score",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "score" */ "../views/Score.vue"),
    props: (route) => ({ from: route.query.group }),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
