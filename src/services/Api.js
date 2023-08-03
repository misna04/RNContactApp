import axios from 'axios';

// ===> api create
const api = axios.create({
  baseURL: 'https://contact.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  // json: true
});

api.interceptors.request.use(
  async config => {
    if (!config.headers) {
      config.headers = {};
    }

    config.headers.authtoken = await localStorage?.authtoken;

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// endpoints
const getContacts = data => api.get(`/contact`, data);
const getContact = id => api.get(`/contact/` + id);
const createContact = data => api.post(`/contact`, data);
const updateContact = (id, data) => api.put(`/contact/` + id, data);
const deleteContact = id => api.delete(`/contact/` + id);

export const apis = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};

export default apis;
