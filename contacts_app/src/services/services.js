import axios from 'axios';
import { API_URL } from '../constants/constants';

export const getContacts = () => {
  return axios.get(API_URL);
};

export const getContact = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

export const addContact = (user) => {
  return axios.post(API_URL, user);
};

export const editContact = (id, user) => {
  return axios.put(`${API_URL}/${id}`, user);
};

export const deleteContact = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
