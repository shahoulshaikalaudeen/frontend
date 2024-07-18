import axios from 'axios';

const API_URL = 'http://localhost:8080/api/items';

export const fetchItemsFromAPI = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createItemInAPI = async (item: { name: string }) => {
  const response = await axios.post(API_URL, item);
  return response.data;
};
