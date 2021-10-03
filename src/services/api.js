import axios from 'axios';
//import {getToken} from "../Auth/index";

const api = axios.create({
    //baseURL: process.env.REACT_APP_API_URL
    baseURL: "http://localhost:9000"
});

/*api.interceptors.request.use(async config => {
    const token = "324sa34a53s4a35s4d3as4d3as4dasd";
    //getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});*/

export default api;