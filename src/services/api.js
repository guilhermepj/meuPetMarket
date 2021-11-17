import axios from 'axios';

const api = axios.create({
<<<<<<< HEAD
    baseURL:"http://128e-189-44-109-186.ngrok.io/api",
=======
    baseURL:"https://987f-45-180-211-136.ngrok.io",
>>>>>>> ae3628d11c3eec56cec98a7446f79bbc2c720717
    headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*"
    }
})

export default api;