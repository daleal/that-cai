import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user';
import alert from './modules/alert';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    alert,
    user,
  },
});

export default store;
