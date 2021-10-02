<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">You are logged in</div>
      </q-card-section>

      <q-separator />

      <q-card-actions vertical>
        <q-separator />
        <q-btn @click="logout" flat>Logout</q-btn>
        <q-separator />
      </q-card-actions>
    </q-card>
  </div>
</template>
<script>
/*eslint-disable */
export default {
  name: 'home',
  methods: {
    logout() {
      this.$store.dispatch('auth/logout').then(() => {
        this.$router.push({ name: 'login' });
      });
    },
  },
};
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
