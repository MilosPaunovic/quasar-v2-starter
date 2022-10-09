<template>
  <q-drawer
    v-if="$q.screen.lt.md"
    v-model="menu"
    side="left"
    class="mobile-menu"
  >
    <Button
      icon="close"
      aria-label="Close mobile menu"
      :color="classes()"
      flat
      @click="update(false)"
    />

    <q-list class="full-width fixed-center">
      <Link
        v-for="(link, index) in links"
        :key="index"
        :to="{ name: link.route }"
        :is-active="$route.name == link.route"
        :label="link.label"
      />

      <q-separator />

      <Link
        label="Logout"
        @click="logout"
      />
    </q-list>
  </q-drawer>
</template>

<script>
import { defineComponent, defineAsyncComponent, computed } from 'vue';
import { useGlobalStore } from 'src/stores/global';
import { useAuthStore } from 'src/stores/auth.js';
import useMode from 'src/composables/mode';

export default defineComponent({
  name: 'MobileMenu',

  components: {
    Link: defineAsyncComponent(() => import('components/navigation/mobile/Link.vue')),
  },

  setup() {
    const global = useGlobalStore();
    const auth = useAuthStore();
    const { classes } = useMode();

    const menu = computed({
      get() {
        return global.isMenuShown;
      },
      set(value) {
        global.updateMenu(value);
      },
    });

    return {
      classes,
      menu,
      update: global.updateMenu,
      links: global.links,
      logout: () => {
        auth.logout();
      },
    };
  },
});
</script>

<style lang="scss">
.q-drawer {
  width: 100% !important;
}

.mobile-menu {
  opacity: 1;

  & .q-btn {
    font-size: 20px;
    position: absolute;
    top: 0;
    right: 0;
  }

  & .q-separator.q-separator--horizontal {
    margin: 0 20%;
  }
}
</style>
