<template>
  <Button
    :to="{ name: link.route }"
    :label="link.label"
    :aria-label="link.label"
    no-caps
    flat
    padding="md md"
    :color="color"
    class="desktop-link"
  />
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import useMode from 'src/composables/mode';

export default defineComponent({
  name: 'Link',

  props: { link: { type: Object, required: true } },

  setup(props) {
    const route = useRoute();
    const { classes } = useMode();

    const color = computed(() => {
      const currentRoute = props.link.route.toLowerCase();

      return currentRoute.includes(route.name.toLowerCase())
        || route.fullPath.includes(currentRoute)
        ? 'primary'
        : classes();
    });

    return { color };
  },
});
</script>

<style lang="scss">
.desktop-link {
  font-size: 12px;
  font-weight: 400;
}
</style>
