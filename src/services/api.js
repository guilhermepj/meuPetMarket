import axios from 'axios';

const api = axios.create({
    baseURL:"https://987f-45-180-211-136.ngrok.io",
    headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*"
    }
})

export default api;