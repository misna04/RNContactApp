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

// endpoints
const getContacts = data => api.get(`/contact`, data);
const getDetail = id => api.get(`/contact/` + id);
const createContact = data => api.post(`/contact`, data);
const updateContact = (id, data) => api.put(`/contact/` + id, data);
const deleteContact = id => api.delete(`/contact/` + id);

export const apis = {
  getContacts,
  getDetail,
  createContact,
  updateContact,
  deleteContact,
};

export default apis;
