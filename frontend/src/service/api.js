import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api",
});

export const getPrices = () => API.get("/prices");
export const getHistorical = (coin) => API.get(`/historical?coin=${coin}`);
