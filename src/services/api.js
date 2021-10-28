import axios from 'axios';

const api = axios.create({
    baseURL:"http://7db7-189-44-109-186.ngrok.io/api",
    headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*"
    }
})

export default api;