<template>
  <header>
    <ul class="header d-flex justify-content-center justify-content-md-start flex-wrap">
      <nav-item :link="links.header.link" classLink="header__item">
        <img src="/vue/logo/Logo.svg" alt="Logo.svg" />
        <!-- <img :src="require(`@/assets/logo/${links.header.icon}`)" :alt="links.header.icon" /> -->
      </nav-item>
      <nav-item
        v-for="link in links.other"
        :key="link.id"
        :link="link.link"
        :text="link.text"
        classLink="header__item"
      ></nav-item>
    </ul>
  </header>
</template>

<script>
import NavItem from "@/components/NavItem";

export default {
  components: { NavItem },
  computed: {
    links() {
      return this.$store.getters["getHeaderLinks"];
    },
  },
  // data() {
  //   return {
  //     links: {
  //       header: {
  //         id: 0,
  //         link: "/",
  //         icon: "Logo.svg",
  //       },
  //       other: [
  //         {
  //           id: 1,
  //           text: "Our coffee",
  //           link: "/our-coffee",
  //         },
  //         {
  //           id: 2,
  //           text: "For your pleasure",
  //           link: "/for-you-pleasure",
  //         },
  //         {
  //           id: 3,
  //           text: "Contact us",
  //           link: "/contact-us",
  //         },
  //       ],
  //     },
  //   };
  // },
};
</script>
