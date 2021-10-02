<template>
  <div class="q-pa-md">
    <div class="q-gutter-md row items-start">
      <form action="" @submit.prevent="onSubmit(email, password)">
        <q-input v-model="email" filled type="email" hint="Email" />
        <q-input
          v-model="password"
          filled
          :type="isPwd ? 'password' : 'text'"
          hint="Password "
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
        <q-btn color="secondary" label="Login" type="submit" />
      </form>
    </div>

    <div class="q-gutter-md row items-start">
      <q-separator />
      <h6>New here?</h6>
      <router-link :to="{ path: 'signup' }"
        ><q-btn color="secondary" label="Signup"
      /></router-link>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      password: ref(''),
      isPwd: ref(true),
      email: ref(''),
    };
  },
  methods: {
    onSubmit(email, password) {
      this.$store
        .dispatch('auth/login', { email, password })
        .then(() => this.$router.push({ name: 'home' }));
    },
  },
};
</script>
