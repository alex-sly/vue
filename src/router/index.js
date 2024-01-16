import Vue from "vue";
import VueRouter from "vue-router";

import HeroView from "../views/HeroView";
import OurCoffeeView from "../views/OurCoffeeView";
import ForYouPleasureView from "../views/ForYouPleasureView";
import ContactUsView from "../views/ContactUsView";
import ThankYouView from "../views/ThankYouView";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: HeroView },
  { path: "/our-coffee", component: OurCoffeeView },
  { path: "/for-you-pleasure", component: ForYouPleasureView },
  { path: "/contact-us", component: ContactUsView },
  { path: "/thank-you", component: ThankYouView },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
