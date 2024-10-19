import axios from 'axios';

// Set the base URL for Axios requests
const api = axios.create({
    baseURL: 'http://localhost:5000/api', 
});

export default api;
