import axios from 'axios';
import Cookies from 'js-cookie';

export const index = async (params: { q: StudentSearchParams }) => {
  try {
    const response = await axios.get(`http://localhost:3001/api/students`, { params });
    const data = response.data.students;
    return data as StudentSearchApiResponse[];
  } catch (error: any) {
    throw new Error(error.response.data.error);
  }
};

export const create = async (params: studentParams) => {
  try {
    const response = await axios.post('http://localhost:3001/api/students', params);
  } catch (error: any) {
    throw new Error(error.response.data.error);
  }
};

export const signIn = async (params: { userId: string; password: string }) => {
  try {
    const response = await axios.post('http://localhost:3001/api/students/signin', params);
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

export const update = async (params: StudentEditFormParams) => {
  try {
    const response = await axios.patch(`http://localhost:3001/api/students/${params.id}`, params);
    const data = response.data;
  } catch (error: any) {
    throw new Error(error.response.data.error);
  }
};
