import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Album from "../views/Album.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/album",
    name: "Album",
    component: Album,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
