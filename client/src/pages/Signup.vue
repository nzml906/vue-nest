<template>
  <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 300px">
      <form @submit.prevent="handleSubmit">
        <q-input v-model="username" type="username" hint="Username" />
        <q-input v-model="email" filled type="email" hint="Email" />
        <q-input
          v-model="password"
          filled
          :type="isPwd ? 'password' : 'username'"
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
        <q-btn color="secondary" label="Sign Up" type="submit" />
      </form>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      username: ref(''),
      password: ref(''),
      isPwd: ref(true),
      email: ref(''),
    };
  },
  methods: {
    handleSubmit() {
      const { username, email, password } = this;
      if (email && password && username) {
        this.$store
          .dispatch('auth/signup', {
            username,
            email,
            password,
          })
          .then(() => this.$router.push({ name: 'home' }));
      }
    },
  },
};
</script>
