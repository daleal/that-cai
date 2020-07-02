import { API_URL } from '@/constants';
import { authHeader } from '@/helpers';

const axios = require('axios');

function getAll() {
  return axios.get(`${API_URL}/articles`);
}

function newArticle(organizationId, title, content) {
  return axios.post(
    `${API_URL}/articles`,
    {
      organizationId,
      title,
      content,
    },
    {
      headers: authHeader(),
    },
  );
}

function getArticle(id) {
  return axios.get(`${API_URL}/articles/${id}`);
}

function modifyArticle(id, organizationId, title, content) {
  return axios.patch(
    `${API_URL}/articles/${id}`,
    {
      organizationId,
      title,
      content,
    },
    {
      headers: authHeader(),
    },
  );
}

function deleteArticle(id) {
  return axios.delete(`${API_URL}/articles/${id}`, { headers: authHeader() });
}

export const articleAPI = {
  getAll,
  getArticle,
  newArticle,
  modifyArticle,
  deleteArticle,
};
