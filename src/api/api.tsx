import axios from "axios";

// Pode ser algum servidor executando localmente:
// http://localhost:3000

const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Authorization",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
    "Content-Type": "application/json;charset=UTF-8",
  },
});

export default api;
