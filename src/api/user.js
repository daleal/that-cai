import { API_URL } from '@/constants';

const axios = require('axios');

function login(email, password) {
  return axios.post(`${API_URL}/auth/login`, { email, password });
}

export const userAPI = {
  login,
};
