<template>
  <div class="q-pa-md">
    <div class="q-gutter-md row items-start">
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
      <q-btn color="secondary" label="Login" />
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
};
</script>
