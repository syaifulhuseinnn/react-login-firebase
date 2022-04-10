import axios from "axios";

const api = axios.create({
  baseURL: "https://favqs.com/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Token token=${process.env.REACT_APP_FAVQ_API_KEY}`,
  },
});

export default api;
