import { defineStore } from 'pinia';

export const windowSizeStore = defineStore('windowSize', {
  state: () => ({
    height: 0,
    width: 0,
  }),
  getters: {
    height_toString: (state) => state.heiht.toString().concat('px'),
    width_toString: (state) => state.heiht.toString().concat('px'),
  },
  actions: {
    initializeSIzes(payload) {
      this.height= payload.height;
      this.width= payload.width;
    },
    
  },
});
