import { boot } from 'quasar/wrappers';
import { useAuthStore } from 'src/stores/auth.js';

export default boot(({ store, router }) => {
  const auth = useAuthStore(store);

  router.beforeEach((to) => {
    const isAuthenticated = auth.getUser();
    const isPublic = to.matched.some((record) => record.meta.public);

    // If not authenticated, redirect to Login
    if (!isAuthenticated && !isPublic && to.name !== 'Login') {
      return { name: 'Login' };
    }

    // If authenticated, don't allow access to public pages
    if (isAuthenticated && isPublic) {
      return { name: 'Home' };
    }
  });
});
