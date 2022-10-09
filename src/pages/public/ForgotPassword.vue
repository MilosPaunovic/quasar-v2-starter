<template>
  <Form
    ref="form"
    @submit="onSubmit"
  >
    <Input
      v-model="user.email"
      label="Email"
      :rules="[v => required(v, 'Email'), v => email(v)]"
      class="q-pt-md"
    />
    <div class="q-pt-lg row justify-between">
      <div class="col-6">
        <div class="row">
          <router-link
            :to="{ name: 'Login' }"
            class="col-12"
          >
            <span>Have credentials?</span>
          </router-link>
        </div>
      </div>
      <div class="col-6 text-right">
        <Button
          label="Login"
          aria-label="Login"
          type="submit"
          :loading="isLoading"
        />
      </div>
    </div>
  </Form>
</template>

<script>
import { defineComponent, ref } from 'vue';
import useValidation from 'src/composables/validation.js';
import { useAuthStore } from 'src/stores/auth.js';

export default defineComponent({
  name: 'ForgotPassword',

  setup() {
    const { required, email } = useValidation();
    const { isLoading, forgotPassword } = useAuthStore();

    const form = ref(null);

    const user = ref({ email: undefined });

    const onSubmit = function () {
      form.value.validate().then((success) => {
        if (success) {
          forgotPassword(user.value);
        }
      });
    };

    return {
      form,
      required,
      email,
      user,
      isLoading,
      onSubmit,
    };
  },
});
</script>
