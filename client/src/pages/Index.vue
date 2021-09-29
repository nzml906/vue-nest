<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">You are logged in</div>
        <div class="text-h6">Login or Sign Up</div>
      </q-card-section>

      <q-separator />

      <q-card-actions vertical>
        <router-link :to="{ path: 'login' }"
          ><q-btn flat>Login</q-btn></router-link
        >
        <q-separator />

        <router-link :to="{ path: 'signup' }"
          ><q-btn flat>Sign Up</q-btn></router-link
        >
        <q-separator />

        <q-btn flat>Logout</q-btn>

        <q-separator />
      </q-card-actions>
    </q-card>
  </div>
</template>
<script>
export default {
  setup() {},
};
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
