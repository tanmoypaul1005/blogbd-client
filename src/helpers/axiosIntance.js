import axios from "axios";
const api = "http://127.0.0.1:5000/api/";
const token = window.localStorage.getItem('token');
const axiosIntance = axios.create({
    baseURL: api,
    headers: { 'Authorization': token ? `Bearer ${token}` : '' }
});

export default axiosIntance;
