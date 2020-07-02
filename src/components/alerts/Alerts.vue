<template>
  <div v-if="alert.message" class="column is-12">
    <div class="container">
      <div :class="`notification ${alert.type}`">
        <button v-on:click="clearAlert" class="delete"></button>
        {{ alert.message }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'alerts',
  computed: {
    alert() {
      return this.$store.state.alert;
    },
  },
  methods: {
    clearAlert() {
      this.$store.dispatch('alert/clear');
    },
  },
  watch: {
    $route() {
      // clear alert on location change
      this.clearAlert();
    },
  },
};
</script>
