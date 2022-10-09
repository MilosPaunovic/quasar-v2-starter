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
    <Input
      v-model="user.password"
      label="Password"
      :rules="[v => required(v, 'Password')]"
      class="q-pt-md"
      :type="visibility ? 'text' : 'password'"
    >
      <template #append>
        <q-icon
          :name="visibility ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="visibility = !visibility"
        />
      </template>
    </Input>
    <div class="q-pt-lg row justify-between">
      <div class="col-6">
        <div class="row">
          <router-link
            :to="{ name: 'Register' }"
            class="col-12"
          >
            <span>Don't have an account?</span>
          </router-link>
          <router-link
            :to="{ name: 'ForgotPassword' }"
            class="col-12"
          >
            <span>Forgot password?</span>
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
  name: 'Login',

  setup() {
    const { required, email } = useValidation();
    const { isLoading, login } = useAuthStore();

    const form = ref(null);

    const user = ref({ email: undefined, password: undefined });
    const visibility = ref(false);

    const onSubmit = function () {
      form.value.validate().then((success) => {
        if (success) {
          login(user.value);
        }
      });
    };

    return {
      form,
      required,
      email,
      user,
      visibility,
      isLoading,
      onSubmit,
    };
  },
});
</script>
