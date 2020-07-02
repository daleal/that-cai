import { API_URL } from '@/constants';
import { authHeader } from '@/helpers';

const axios = require('axios');

function getAll() {
  return axios.get(`${API_URL}/organizations`);
}

function newOrganization(name, description) {
  return axios.post(
    `${API_URL}/organizations`,
    {
      name,
      description,
    },
    {
      headers: authHeader(),
    },
  );
}

function getOrganization(id) {
  return axios.get(`${API_URL}/organizations/${id}`);
}

function modifyOrganization(id, name, description) {
  return axios.patch(
    `${API_URL}/organizations/${id}`,
    {
      name,
      description,
    },
    {
      headers: authHeader(),
    },
  );
}

function deleteOrganization(id) {
  return axios.delete(`${API_URL}/organizations/${id}`, { headers: authHeader() });
}

export const organizationAPI = {
  getAll,
  getOrganization,
  newOrganization,
  modifyOrganization,
  deleteOrganization,
};
