import axios from 'axios';

export const create = async (params: InternParams) => {
  try {
    const response = await axios.post('http://localhost:3001/api/intern/create', params);
    const data = response.data;
  } catch (error: any) {
    throw new Error(error.response.data.error);
  }
};
