import axios from 'axios';
export const API_URL = 'https://612687da3ab4100017a68fd8.mockapi.io/stickers';

export default axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
