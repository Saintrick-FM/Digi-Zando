import { defineStore } from "pinia";

export const windowSizeStore = defineStore("windowSize", {
  state: () => ({
    categoriesTop: 0,
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
