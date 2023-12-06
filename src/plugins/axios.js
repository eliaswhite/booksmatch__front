import axios from "axios";

// axios.defaults.baseURL = 'http://localhost:19003/'
axios.defaults.baseURL = 'https://booksmatch.3.us-1.fl0.io/'

const api = axios.create({
    baseURL: 'https://booksmatch.3.us-1.fl0.io/api/'
})

export default api
