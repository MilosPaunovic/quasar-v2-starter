import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('global', {
  state: () => ({
    isMenuShown: false,
    links: [
      { route: 'Home', label: 'Home' },
    ],
  }),
  actions: {
    updateMenu(isShown) {
      this.isMenuShown = isShown;
    },
  },
});
