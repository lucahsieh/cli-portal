import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegistrationView from "../views/RegistrationView.vue";
import RegistrationStep2View from "../views/RegistrationStep2View.vue";
import RegistrationStep3View from "../views/RegistrationStep3View.vue";
import RegistrationStep4View from "../views/RegistrationStep4View.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/step1",
    name: "step1",
    component: RegistrationView,
  },
  {
    path: "/step2",
    name: "step2",
    component: RegistrationStep2View,
  },
  {
    path: "/step3",
    name: "step3",
    component: RegistrationStep3View,
  },
  {
    path: "/step4",
    name: "step4",
    component: RegistrationStep4View,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
