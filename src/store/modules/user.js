const storedUser = JSON.parse(localStorage.getItem('user'));

const initialState = storedUser
  ? { status: { loggedIn: true }, user: storedUser }
  : { status: {}, user: null };

const getters = {
  currentUser(state) {
    if (state.status.loggedIn) {
      return state.user;
    }
    return null;
  },
};

const actions = {
  // Login
  loginRequest({ commit }) {
    commit('loginRequest');
  },
  loginSuccess({ commit }, { user }) {
    commit('loginSuccess', user);
  },
  loginFailure({ commit }) {
    commit('loginFailure');
  },
  // Logout
  logout({ commit }) {
    commit('logout');
  },
};

const mutations = {
  // Login
  loginRequest(state) {
    state.status = { loggingIn: true };
    state.user = null;
  },
  loginSuccess(state, user) {
    state.status = { loggedIn: true };
    state.user = user;
  },
  loginFailure(state) {
    state.status = {};
    state.user = null;
  },
  // Logout
  logout(state) {
    state.status = {};
    state.user = null;
  },
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
