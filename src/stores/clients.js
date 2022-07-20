import { defineStore } from "pinia";

export const clientsStore = defineStore("clientsStore", {
  state: () => ({
    allClients: [
      {
        name: "Francy",
        productsLikes: ["Weston"],
      },
    ],
  }),
  getters: {
    firstClient: (state) => state.allClients[0].name,
  },
  actions: {
    initializeClients(payload) {
      this.allClients = payload;
    },
  },
});
