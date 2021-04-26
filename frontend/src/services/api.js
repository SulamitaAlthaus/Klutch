import axios from 'axios';

const api = axios.create({
 baseURL: 'https://klutch-backend.herokuapp.com/'
});

export default api;