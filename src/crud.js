import axios from 'axios';

const API_URL = 'http://localhost:3000/plants';

export const fetchData = async () => {
  try {
    const resp = await axios.get(API_URL);
    console.log(resp);
    return resp.data;
  } catch (err) {
    console.log(err);
  } finally {
  }
}

export const updateItem = async (item) => {
  const resp = await axios.put(`${API_URL}/${item.id}`, item);
  return resp.data;
}
