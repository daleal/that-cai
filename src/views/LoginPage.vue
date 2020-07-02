<template>
  <div class="container">
    <div class="column is-12">
      <h1 class="title is-1 has-text-centered heading">Login</h1>
      <form @submit.prevent="handleSubmit">
        <div class="field">
          <label for="email" class="label">Email</label>
          <div class="control">
            <input
              v-model="email"
              name="email"
              class="input"
              :class="{ 'is-danger': submitted && !email }"
              type="email"
              placeholder="Email"
            >
          </div>
          <p v-show="submitted && !email" class="help is-danger">Email is required</p>
        </div>

        <div class="field">
          <label htmlFor="password" class="label">Password</label>
          <div class="control">
            <input
              v-model="password"
              name="password"
              class="input"
              :class="{ 'is-danger': submitted && !password }"
              type="password"
              placeholder="Password"
            >
          </div>
          <p v-show="submitted && !password" class="help is-danger">Password is required</p>
        </div>

        <div class="field">
          <div class="control">
            <button class="button is-link" :disabled="loggingIn">Login</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-cycle
import { userService } from '@/services';

export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      submitted: false,
    };
  },
  computed: {
    loggingIn() {
      return this.$store.state.user.status.loggingIn;
    },
  },
  created() {
    // reset login status
    userService.logout();
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
      const { email, password } = this;
      if (email && password) {
        userService.login(email, password);
      }
    },
  },
};
</script>
