import axios from 'axios';

export const create = async (params: messageFormParams) => {
  try {
    const response = await axios.post('http://localhost:3001/api/messages', params);
    const data = response.data;
  } catch (error: any) {
    throw new Error(error.response.data.error);
  }
};
