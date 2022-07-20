import { defineStore } from "pinia";

export const productsStore = defineStore("productsStore", {
  state: () => ({
    products: [],
  }),
  getters: {
    categoriesTop_toString: (state) =>
      state.categoriesTop.toString().concat("px"),
  },
  actions: {
    initializeSIzes(payload) {
      this.categoriesTop = payload;
    },
  },
});
