import axios from 'axios';

export const changeLiked = async (params: {
  intern_id: string;
  student_id: string | undefined;
}) => {
  try {
    const response = await axios.get('http://localhost:3001/api/likes/change_liked', { params });
    return response.data.is_liked;
  } catch (error: any) {
    throw new Error(error.response.data.error);
  }
};
