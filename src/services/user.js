import store from '@/store';
import router from '@/router';
import { userAPI } from '@/api';

async function login(email, password) {
  store.dispatch('user/loginRequest');
  try {
    const response = await userAPI.login(email, password);
    const { data } = response;
    localStorage.setItem('user', JSON.stringify(data));
    store.dispatch('user/loginSuccess', data);
    router.push({ name: 'HomePage' });
  } catch (error) {
    const { data } = error.response;
    store.dispatch('user/loginFailure');
    store.dispatch('alert/danger', data.message);
  }
}

function logout() {
  localStorage.removeItem('user');
  store.dispatch('user/logout');
}

export const userService = {
  login,
  logout,
};
