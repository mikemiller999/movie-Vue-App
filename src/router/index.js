import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MovieIndex from "../views/MovieIndex.vue";
import MovieNew from "../views/newMovie.vue";
import MovieShow from "../views/showMovie.vue";
import MoviesEdit from "../views/updateMovie.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  { path: "/movies", name: "Index", component: MovieIndex },
  { path: "/newmovies", name: "MovieNew", component: MovieNew },
  { path: "/movies/:id", name: "MoviesShow", component: MovieShow },
  { path: "/movies/:id/edit", name: "MoviesEdit", component: MoviesEdit },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
