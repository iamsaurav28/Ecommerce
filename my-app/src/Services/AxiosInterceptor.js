import axios from "axios";

const instance = axios.create({
     baseURL:"https://mern-ecommerce-ssky.onrender.com",
     timeout:1000,
})

export default instance;


