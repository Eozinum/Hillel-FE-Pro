import axios from 'axios';
import { API_URL } from '../constants/index';

export const editNote = (id, description) => {
  return axios.put(`${API_URL}/${id}`, { description });
};
