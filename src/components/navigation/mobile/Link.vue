<template>
  <q-item
    :active="isActive"
    active-class="text-primary"
    class="col-xs-10 offset-xs-1 col-sm-8 offset-sm-2"
    clickable
    @click="$emit('click')"
  >
    <q-item-section class="mobile-menu-link">
      {{ label }}
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Link',

  props: {
    label: { type: String, required: true },
    isActive: { type: Boolean, required: false, default: false },
  },

  emits: ['click'],
});
</script>

<style lang="scss">
.mobile-menu-link {
  font-size: 24px;
  font-weight: 700;
  line-height: 1.7;
  text-align: center;
}
</style>
