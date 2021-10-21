import axios from 'axios';
import { getToken } from '../Auth/index';
//require('dotenv').config();

const api = axios.create({
  //baseURL:
  //baseURL: "https://nkwbackend.herokuapp.com"  
  baseURL: process.env.REACT_APP_API_URL
    //baseURL: "http://localhost:9000"
});

api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = token//`Bearer ${token}`;
    }
    return config;
});

export default api;