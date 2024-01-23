const coffee = {
  state: {
    coffee: [
      {
        id: 0,
        name: "Death Wish Bean",
        price: 12.99,
        image: "coffee-1.jpg",
      },
      {
        id: 1,
        name: "AROMISTICO Coffee 1 kg",
        price: 6.99,
        image: "coffee-2.jpg",
      },
      {
        id: 2,
        name: "Solimo Coffee Beans 2 kg",
        price: 10.73,
        image: "coffee-3.jpg",
      },
      {
        id: 3,
        name: "Black Rifle Coffee",
        price: 19.75,
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
    getCoffee(state) {
      return state.coffee;
    },
    getProductById(state) {
      return (id) => {
        return state.coffee.find((card) => card.id === +id);
      };
    },
  },
};

export default coffee;
