import axios from "axios";

const api = axios.create({
  baseURL: "https://favqs.com/api",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Token token=6c4b7831400dbb58c8909e9845301c8d",
  },
});

export default api;
