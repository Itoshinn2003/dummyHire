import axios from 'axios';

export const index = async (params: { q: InternSearchParams }) => {
  try {
    const response = await axios.get('http://localhost:3001/api/interns', { params });
    const data = response.data.interns;
    return data as InternSearchApiResponse[];
  } catch (error: any) {
    throw new Error(error.response.data.error);
  }
};
export const create = async (params: InternParams) => {
  try {
    const response = await axios.post('http://localhost:3001/api/intern/create', params);
    const data = response.data;
  } catch (error: any) {
    throw new Error(error.response.data.error);
  }
};

export const destroy = async (internId: string) => {
  try {
    const response = await axios.delete(`http://localhost:3001/api/interns/${internId}`);
  } catch (error) {
    console.error('Request failed', error);
  }
};
