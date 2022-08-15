import axios from 'axios';
import { API_URL } from '../constants/constants';

export const getUsers = () => {
  return axios.get(API_URL);
};

export const getUser = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

export const addUser = (user) => {
  return axios.post(API_URL, user);
};

export const editUser = (id, user) => {
  return axios.put(`${API_URL}/${id}`, user);
};

export const deleteUser = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
