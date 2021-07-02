import Vue from "vue";
import VueRouter from "vue-router";

const routerOptions = [
  { path: "/", component: "Home", name: 'Домашняя'},
  { path: "/statements", component: "Statements", name: 'Высказывания'},
  { path: "/wishes", component: "Wishes", name: 'Желания'},
];

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`../components/${route.component}.vue`)
  };
});

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes
});