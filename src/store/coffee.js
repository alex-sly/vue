const coffee = {
  state: {
    coffee: [
      // {
      //   id: 0,
      //   name: "Death Wish Bean",
      //   price: 12.99,
      //   image: "coffee-1.jpg",
      // },
      // {
      //   id: 1,
      //   name: "AROMISTICO Coffee 1 kg",
      //   price: 6.99,
      //   image: "coffee-2.jpg",
      // },
      // {
      //   id: 2,
      //   name: "Solimo Coffee Beans 2 kg",
      //   price: 10.73,
      //   image: "coffee-3.jpg",
      // },
      // {
      //   id: 3,
      //   name: "Black Rifle Coffee",
      //   price: 19.75,
      //   image: "coffee-1.jpg",
      // },
      // {
      //   id: 4,
      //   name: "Presto Coffee Beans 1 kg",
      //   price: 15.99,
      //   image: "coffee-2.jpg",
      // },
      // {
      //   id: 5,
      //   name: "Organic Coffee One Cup",
      //   price: 24.99,
      //   image: "coffee-3.jpg",
      // },
    ],
    searchValue: "",
    sortValue: "",
  },
  mutations: {
    setCoffeeData(state, data) {
      state.coffee = data;
    },
    setSearchValue(state, value) {
      state.searchValue = value;
    },
    setSortValue(state, value) {
      state.sortValue = value;
    },
  },
  actions: {
    setCoffeeData({ commit }, data) {
      commit("setCoffeeData", data);
    },
    setSearchValue({ commit }, value) {
      commit("setSearchValue", value);
    },
    setSortValue({ commit }, value) {
      commit("setSortValue", value);
    },
  },
  getters: {
    getCoffee(state) {
      return state.coffee;
      // .filter((item) => item.name.toLowerCase().includes(state.searchValue.toLowerCase()))
      // .filter((item) => item.country.toLowerCase().includes(state.sortValue.toLowerCase()));
    },
    getProductById(state) {
      return (id) => {
        return state.coffee.find((card) => card.id === +id);
      };
    },
    getSearchValue(state) {
      return state.searchValue;
    },
  },
};

export default coffee;
