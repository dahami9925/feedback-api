import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5050", // this should match your backend server
});