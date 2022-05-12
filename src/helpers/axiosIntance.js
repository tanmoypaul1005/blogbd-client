import axios from "axios";
const api = " https://blogbd-server.herokuapp.com/api/";
const token = window.localStorage.getItem('token');
const axiosIntance = axios.create({
    baseURL: api,
    headers: { 'Authorization': token ? `Bearer ${token}` : '' }
});

export default axiosIntance;
