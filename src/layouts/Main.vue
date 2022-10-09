<template>
  <q-layout view="hHh lpR fFf">
    <DesktopNAV />
    <MobileNAV />

    <q-page-container>
      <router-view class="q-pa-xl" />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue';

export default defineComponent({
  name: 'Main',

  components: {
    DesktopNAV: defineAsyncComponent(() => import('components/navigation/desktop/Header.vue')),
    MobileNAV: defineAsyncComponent(() => import('components/navigation/mobile/Menu.vue')),
  },
});
</script>
