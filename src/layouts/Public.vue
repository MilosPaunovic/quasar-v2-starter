<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <q-page class="flex flex-center">
        <Mode class="absolute-top-right" />
        <div class="row full-width">
          <div
            class="
              col-xs-10
              offset-xs-1
              col-sm-6
              offset-sm-3
              col-md-4
              offset-md-4
            "
          >
            <div class="full-width q-mb-lg text-center">
              <router-link :to="{ name: 'Home' }">
                <img
                  src="~/assets/images/logo.png"
                  alt="Logo"
                  width="80"
                >
              </router-link>
            </div>
            <router-view />
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue';

export default defineComponent({
  name: 'Public',

  components: {
    Mode: defineAsyncComponent(() => import('src/components/shared/Mode.vue')),
  },
});
</script>
