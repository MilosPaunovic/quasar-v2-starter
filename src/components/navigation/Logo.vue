<template>
  <q-toolbar-title
    shrink
    :class="{
      'q-ml-xl': $q.screen.gt.sm,
      'absolute-center': $q.screen.lt.md,
    }"
    class="cursor-pointer"
  >
    <router-link :to="{ name: 'Home' }">
      <img
        src="~/assets/images/logo.png"
        alt="Logo"
        height="30"
        class="q-mt-sm"
      >
    </router-link>
    <q-badge
      v-if="debbuging"
      label="DEV"
      color="primary"
      align="top"
      class="q-mt-sm"
    />
  </q-toolbar-title>
</template>

<script>
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'Logo',

  setup() {
    const debbuging = computed(() => process.env.DEBUGGING);

    return { debbuging };
  },
});
</script>
