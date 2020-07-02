import { API_URL } from '@/constants';
import { authHeader } from '@/helpers';

const axios = require('axios');

function getAll() {
  return axios.get(`${API_URL}/events`);
}

function newEvent(organizationId, title, content) {
  return axios.post(
    `${API_URL}/events`,
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

function getEvent(id) {
  return axios.get(`${API_URL}/events/${id}`);
}

function modifyEvent(id, organizationId, title, content) {
  return axios.patch(
    `${API_URL}/events/${id}`,
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

function deleteEvent(id) {
  return axios.delete(`${API_URL}/events/${id}`, { headers: authHeader() });
}

function attendEvent(id) {
  return axios.post(`${API_URL}/events/${id}/attendance`, { headers: authHeader() });
}

function unattendEvent(id) {
  return axios.delete(`${API_URL}/events/${id}/attendance`, { headers: authHeader() });
}

export const eventAPI = {
  getAll,
  getEvent,
  newEvent,
  modifyEvent,
  deleteEvent,
  attendEvent,
  unattendEvent,
};
