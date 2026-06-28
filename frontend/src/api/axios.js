import axios from "axios";

const api = axios.create({
  baseURL: "https://time-lapse-cafe-1.onrender.com/api",
});

export default api;