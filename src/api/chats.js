import { API_URL } from '@/constants';
import { authHeader } from '@/helpers';

const axios = require('axios');

function getAll() {
  return axios.get(`${API_URL}/chats`, { headers: authHeader() });
}

function getAnonymous() {
  return axios.get(`${API_URL}/chats/anonymous`, { headers: authHeader() });
}

function getChat(id) {
  return axios.get(`${API_URL}/chats/${id}`, { headers: authHeader() });
}

function sendMessage(id, message) {
  return axios.post(`${API_URL}/chats/${id}`, { message }, { headers: authHeader() });
}

export const chatAPI = {
  getAll,
  getAnonymous,
  getChat,
  sendMessage,
};
