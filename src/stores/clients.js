import { defineStore } from "pinia";

export const clientsStore = defineStore("clientsStore", {
  state: () => ({
    allClients: [],
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
