const initialState = {
  type: null,
  message: null,
};

const actions = {
  info({ commit }, message) {
    commit('info', message);
  },
  success({ commit }, message) {
    commit('success', message);
  },
  warning({ commit }, message) {
    commit('warning', message);
  },
  danger({ commit }, message) {
    commit('danger', message);
  },
  clear({ commit }) {
    commit('clear');
  },
};

const mutations = {
  info(state, message) {
    state.message = message;
    state.type = 'is-info';
  },
  success(state, message) {
    state.message = message;
    state.type = 'is-success';
  },
  warning(state, message) {
    state.message = message;
    state.type = 'is-warning';
  },
  danger(state, message) {
    state.message = message;
    state.type = 'is-danger';
  },
  clear(state) {
    state.message = null;
    state.type = null;
  },
};

export default {
  namespaced: true,
  state: initialState,
  actions,
  mutations,
};
