import axios from 'axios';
import Cookies from 'js-cookie';
export const create = async (params: studentParams) => {
  try {
    const response = await axios.post('http://localhost:3001/api/student/create', params);
  } catch (error: any) {
    throw new Error(error.response.data.error);
  }
};

export const signIn = async (params: { userId: string; password: string }) => {
  try {
    const response = await axios.post('http://localhost:3001/api/student/signin', params);
    const data = response.data;
    Cookies.set('student_id', response.data.id, {
      expires: 7,
      sameSite: 'Lax',
      path: '/',
    });
  } catch (error: any) {
    throw new Error(error.response.data.error);
  }
};

export const profile = async (params: { id: string }) => {
  const response = await axios.post('http://localhost:3001/api/student/profile', params);
  const data = response.data;
};
