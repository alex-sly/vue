const goods = {
  state: {
    goods: [
      {
        id: 0,
        name: "Electric Spice and Coffee Grinder",
        price: 36.99,
        image: "coffee-1.jpg",
      },
      {
        id: 1,
        name: "Manual Coffee Grinder",
        price: 25.99,
        image: "coffee-2.jpg",
      },
      {
        id: 2,
        name: "Coffee Cup with Lid",
        price: 15.99,
        image: "coffee-3.jpg",
      },
      {
        id: 3,
        name: "Pour Over Coffee Maker",
        price: 45.99,
        image: "coffee-1.jpg",
      },
      {
        id: 4,
        name: "Presto Coffee Beans 1 kg",
        price: 15.99,
        image: "coffee-2.jpg",
      },
      {
        id: 5,
        name: "Organic Coffee One Cup",
        price: 24.99,
        image: "coffee-3.jpg",
      },
    ],
  },
  getters: {
    getGoods(state) {
      return state.goods;
    },
  },
};

export default goods;
