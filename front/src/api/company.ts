import axios from 'axios';
import Cookies from 'js-cookie';

export const signIn = async (params: { userId: string; password: string }) => {
  try {
    const response = await axios.post('http://localhost:3001/api/company/signin', params);
    const data = response.data;
    Cookies.set('company_id', response.data.id, {
      expires: 7,
      sameSite: 'Lax',
      path: '/',
    });
  } catch (error: any) {
    throw new Error(error.response.data.error);
  }
};

export const update = async (params: CompanyEditFormParams) => {
  try {
    const response = await axios.post('http://localhost:3001/api/company/update', params);
    const data = response.data;
  } catch (error: any) {
    throw new Error(error.response.data.error);
  }
};
