import axios from 'axios';
export const create = async (params: any) => {
  try {
    const response = await axios.post('http://localhost:3001/api/student/create', { params });
    console.log('A');
  } catch (error: any) {
    console.log(error);
  }
};
