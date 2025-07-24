import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost/php_etec/Book_store/server/api",
});

export default api;
