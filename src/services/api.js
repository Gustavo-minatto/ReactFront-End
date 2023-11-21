import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketnotes-api-sk9q.onrender.com"
});
