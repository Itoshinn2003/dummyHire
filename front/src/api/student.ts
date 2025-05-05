import axios from 'axios';
export const create = async (params: studentParams) => {
  try {
    const response = await axios.post('http://localhost:3001/api/student/create', params);
  } catch (error: any) {
    throw new Error(error.response.data.error);
  }
};
