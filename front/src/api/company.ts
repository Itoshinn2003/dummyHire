import axios from 'axios';

export const signIn = async (params: { userId: string; password: string }) => {
  try {
    const response = await axios.post('http://localhost:3001/api/company/signin', params);
    const data = response.data;
    sessionStorage.setItem('companyid', data.id);
  } catch (error: any) {
    throw new Error(error.response.data.error);
  }
};
