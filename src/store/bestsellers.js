const bestsellers = {
  state: {
    bestsellers: [
      // {
      //   id: 0,
      //   name: "Solimo Coffee Beans 2 kg",
      //   price: 10.73,
      //   image: "coffee-1.jpg",
      // },
      // {
      //   id: 1,
      //   name: "Presto Coffee Beans 1 kg",
      //   price: 15.99,
      //   image: "coffee-2.jpg",
      // },
      // {
      //   id: 2,
      //   name: "AROMISTICO Coffee 1 kg",
      //   price: 6.99,
      //   image: "coffee-3.jpg",
      // },
    ],
  },
  mutations: {
    setBestsellersData(state, data) {
      state.bestsellers = data;
    },
  },
  actions: {
    setBestsellersData({ commit }, data) {
      commit("setBestsellersData", data);
    },
  },
  getters: {
    getBestsellers(state) {
      return state.bestsellers;
    },
  },
};

export default bestsellers;
