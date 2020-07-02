<template>
  <div id="app">
    <!-- NavBar -->
    <NavBar/>
    <!-- Alerts -->
    <Alerts/>
    <!-- Content -->
    <router-view/>

  </div>
</template>

<script>
import NavBar from '@/components/navbar/NavBar.vue';
import Alerts from '@/components/alerts/Alerts.vue';

export default {
  name: 'app',
  components: {
    NavBar,
    Alerts,
  },
};
</script>

<style lang="scss">
html, body {
  font-family: -apple-system, BlinkMacSystemFont,"Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 16px;
  line-height: 1.5;
  height: 100%;
  background: #ECF0F3;
}
</style>
