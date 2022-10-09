<template>
  <q-toggle
    v-model="currentMode"
    aria-label="Dark mode toggle"
    checked-icon="dark_mode"
    true-value="dark"
    unchecked-icon="light_mode"
    false-value="light"
    :color="classes({ colors: ['primary', 'dark'] })"
    keep-color
    @update:model-value="updateMode"
  />
</template>

<script>
import { defineComponent } from 'vue';
import useMode from 'src/composables/mode';

export default defineComponent({
  name: 'Mode',

  setup() {
    const { currentMode, updateMode, classes } = useMode();
    return { currentMode, updateMode, classes };
  },
});
</script>
