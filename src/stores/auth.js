import { defineStore } from 'pinia';
import * as Sentry from '@sentry/vue';
import AUTH from 'src/api/auth.js';

const USER_KEY = 'user';

import { useGlobalStore } from './global.js';

const { updateMenu } = useGlobalStore();

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoading: false,
  }),
  actions: {
    getUser() {
      return localStorage.getItem(USER_KEY);
    },
    saveUser(user) {
      localStorage.setItem(USER_KEY, JSON.stringify(user));
    },
    removeUser() {
      localStorage.removeItem(USER_KEY);
    },
    login(credentials) {
      this.isLoading = true;
      return AUTH.login(credentials)
        .then((response) => {
          if (response.status === 200) {
            this.saveUser(response.data.data.details);
            Sentry.setUser({ email: credentials.email });
            this.router.push({ name: 'Home' });
          }
          return response;
        })
        .catch((err) => err)
        .finally(() => this.isLoading = false);
    },

    register(data) {
      this.isLoading = true;
      return AUTH.register(data)
        .then((response) => {
          if (response.status === 201) {
            this.router.push({ name: 'Login' });
          }
          return response;
        })
        .catch((err) => err)
        .finally(() => this.isLoading = false);
    },

    forgotPassword(email) {
      this.isLoading = true;
      return AUTH.forgotPassword(email)
        .then((response) => {
          if (response.status === 200) {
            this.router.push({ name: 'Login' });
          }
          return response;
        })
        .catch((err) => err)
        .finally(() => this.isLoading = false);
    },

    resetPassword(data) {
      this.isLoading = true;
      return AUTH.resetPassword(data.hash, data.credentials)
        .then((response) => {
          if (response.status === 200) {
            const { login } = useAuthStore();
            login({ username: data.email, password: data.credentials.password });
          }
          return response;
        })
        .catch((err) => err)
        .finally(() => this.isLoading = false);
    },

    confirmInvitation(data) {
      this.isLoading = true;
      return AUTH.confirmInvitation(data.hash, data.credentials)
        .then((response) => {
          if (response.status === 200) {
            const { login } = useAuthStore();
            login({ username: data.email, password: data.credentials.password });
          }
          return response;
        })
        .catch((err) => err)
        .finally(() => this.isLoading = false);
    },

    logout() {
      this.isLoading = true;
      return AUTH.logout()
        .then((response) => {
          if (response.status === 200) {
            this.removeUser();
            updateMenu(false);
            Sentry.configureScope((scope) => scope.setUser(undefined));
            this.router.push({ name: 'Login' });
          }
          return response;
        })
        .catch((err) => err)
        .finally(() => this.isLoading = false);
    },
  },
});
