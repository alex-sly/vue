<template>
  <main>
    <div class="banner goodspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>
        <h1 class="title-big">For your pleasure</h1>
      </div>
    </div>
    <section class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-2">
            <img class="shop__girl" src="@/assets/img/coffee_goods.jpg" alt="girl" />
          </div>
          <div class="col-lg-4">
            <div class="title">About our beans</div>
            <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo" />
            <div class="shop__text">
              Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
              <br /><br />
              Afraid at highly months do things on at. Situation recommend objection do intention<br />
              so questions. <br />
              As greatly removed calling pleased improve an. Last ask him cold feel<br />
              met spot shy want. Children me laughing we prospect answered followed. At it went<br />
              is song that held help face.
            </div>
          </div>
        </div>

        <div class="line"></div>

        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper">
              <product-card
                v-for="card in goods"
                :key="card.id"
                classItem="shop__item"
                :name="card.name"
                :price="card.price"
                :image="card.image"
                :card="card"
                @onNavigate="navigate"
              />
              <!-- <div class="shop__item">
                <img src="@/assets/img/good-1.jpg" alt="coffee" />
                <div class="shop__item-title">Solimo Coffee Beans 2kg</div>
                <div class="shop__item-country">Brazil</div>
                <div class="shop__item-price">10.73$</div>
              </div>
              <div class="shop__item">
                <img src="@/assets/img/good-1.jpg" alt="coffee" />
                <div class="shop__item-title">Presto Coffee Beans 1kg</div>
                <div class="shop__item-country">Brazil</div>
                <div class="shop__item-price">15.99$</div>
              </div>
              <div class="shop__item">
                <img src="@/assets/img/good-1.jpg" alt="coffee" />
                <div class="shop__item-title">AROMISTICO Coffee 1kg</div>
                <div class="shop__item-country">Brazil</div>
                <div class="shop__item-price">6.99$</div>
              </div>
              <div class="shop__item">
                <img src="@/assets/img/good-1.jpg" alt="coffee" />
                <div class="shop__item-title">Solimo Coffee Beans 2kg</div>
                <div class="shop__item-country">Brazil</div>
                <div class="shop__item-price">10.73$</div>
              </div>
              <div class="shop__item">
                <img src="@/assets/img/good-1.jpg" alt="coffee" />
                <div class="shop__item-title">Solimo Coffee Beans 2kg</div>
                <div class="shop__item-country">Brazil</div>
                <div class="shop__item-price">10.73$</div>
              </div>
              <div class="shop__item">
                <img src="@/assets/img/good-1.jpg" alt="coffee" />
                <div class="shop__item-title">Solimo Coffee Beans 2kg</div>
                <div class="shop__item-country">Brazil</div>
                <div class="shop__item-price">10.73$</div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
import ProductCard from "@/components/ProductCard.vue";

export default {
  components: { NavBarComponent, ProductCard },
  computed: {
    goods() {
      return this.$store.getters["getGoods"];
    },
  },
  methods: {
    navigate(id) {
      this.$router.push({ name: "goods", params: { id: id } });
    },
  },
  data() {
    return {
      name: "goods",
    };
  },
  mounted() {
    fetch("db.json")
      .then((res) => res.json())
      .then((data) => {
        this.$store.dispatch("setGoodsData", data["goods"]);
      });
    // "http://localhost:3000/goods"
  },
};
</script>
