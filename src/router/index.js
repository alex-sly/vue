import Vue from "vue";
import VueRouter from "vue-router";

import HeroView from "../views/HeroView";
import OurCoffeeView from "../views/OurCoffeeView";
import ForYouPleasureView from "../views/ForYouPleasureView";
import ContactUsView from "../views/ContactUsView";
import ThankYouView from "../views/ThankYouView";
import GoodsItemView from "../views/GoodsItemView";

Vue.use(VueRouter);

const routes = [
  { path: "/vue/", component: HeroView },
  { path: "/vue/our-coffee", component: OurCoffeeView },
  { path: "/vue/for-you-pleasure", component: ForYouPleasureView },
  { path: "/vue/contact-us", component: ContactUsView },
  { path: "/vue/thank-you", component: ThankYouView },
  { name: "coffee", path: "/vue/our-coffee/:id", component: GoodsItemView },
  { name: "goods", path: "/vue/for-you-pleasure/:id", component: GoodsItemView },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
