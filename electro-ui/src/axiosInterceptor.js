import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({ baseURL: 'http://localhost:9000/api', });

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401)  {
      const navigate = useNavigate();
      navigate('/');
      return new Promise(() => {}); 
    } else  {
      return Promise.reject(error);
    }
  }
);

export default axiosInstance;