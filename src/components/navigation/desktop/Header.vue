<template>
  <q-header
    bordered
    :class="classes({ prefix: 'bg', invert: true })"
  >
    <q-toolbar>
      <Button
        v-if="$q.screen.lt.md"
        icon="menu"
        aria-label="Open mobile menu"
        :color="classes()"
        flat
        @click="updateMenu(true)"
      />

      <Logo />

      <template v-if="$q.screen.lt.md">
        <q-space />

        <Mode />
      </template>

      <template v-else>
        <Link
          v-for="(link, index) in links.filter((link) => !link.onlyMobile)"
          :key="index"
          :link="link"
        />

        <q-space />

        <Mode />

        <Button
          icon="logout"
          aria-label="Logout"
          flat
          @click="logout"
        />
      </template>
    </q-toolbar>
  </q-header>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue';
import { useGlobalStore } from 'src/stores/global';
import { useAuthStore } from 'src/stores/auth.js';
import useMode from 'src/composables/mode';

export default defineComponent({
  name: 'DesktopHeader',

  components: {
    Logo: defineAsyncComponent(() => import('components/navigation/Logo.vue')),
    Link: defineAsyncComponent(() => import('components/navigation/desktop/Link.vue')),
    Mode: defineAsyncComponent(() => import('src/components/shared/Mode.vue')),
  },

  setup() {
    const global = useGlobalStore();
    const auth = useAuthStore();
    const { classes } = useMode();

    return {
      classes,
      links: global.links,
      updateMenu: global.updateMenu,
      logout: () => {
        auth.logout();
      },
    };
  },
});
</script>
