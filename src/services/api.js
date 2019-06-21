import axios from "axios";

const api = axios.create({
  baseURL: "https://rlk-instagram-clone-backend.herokuapp.com/"
});

export default api;
