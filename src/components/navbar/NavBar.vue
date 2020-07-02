<template>
  <nav class="navbar is-white">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item brand-text">That CAi</router-link>
        <div
          class="navbar-burger burger"
          v-bind:class="{ 'is-active': isActive }"
          v-on:click="toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        id="navMenu"
        class="navbar-menu"
        v-bind:class="{ 'is-active': isActive }"
      >
        <div class="navbar-start">
          <router-link
            v-if="!userData.status.loggedIn"
            :to="{ name: 'LoginPage' }"
            class="navbar-item"
          >
            Login
          </router-link>
          <router-link
            v-if="userData.status.loggedIn"
            :to="{ name: 'ChatsPage' }"
            class="navbar-item"
          >
            Chats
          </router-link>
          <router-link
            v-if="userData.status.loggedIn"
            :to="{ name: 'OrganizationsPage' }"
            class="navbar-item"
          >
            Organizaciones
          </router-link>
          <router-link
            v-if="userData.status.loggedIn"
            :to="{ name: 'ArticlesPage' }"
            class="navbar-item"
          >
            Noticias
          </router-link>
          <router-link
            v-if="userData.status.loggedIn"
            :to="{ name: 'EventsPage' }"
            class="navbar-item"
          >
            Eventos
          </router-link>
          <a
            v-if="userData.status.loggedIn"
            class="navbar-item"
            v-on:click="logout"
          >
            Logout
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
// eslint-disable-next-line import/no-cycle
import { userService } from '@/services';

export default {
  name: 'navbar',
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
    userData() {
      return this.$store.state.user;
    },
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },
    logout() {
      userService.logout();
      this.$router.push({ name: 'LoginPage' });
    },
  },
  watch: {
    $route() {
      this.isActive = false;
    },
  },
};
</script>

<style scoped lang="scss">
nav.navbar {
  border-top: 4px solid #276cda;
  margin-bottom: 1rem;
}
.navbar-item.brand-text {
  font-weight: 300;
}
.navbar-item, .navbar-link {
  font-size: 14px;
  font-weight: 700;
}
</style>
