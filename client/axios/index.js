import axios from "axios";
export default axios.create({
  baseURL: "http://0c5efe54.ngrok.io",
  timeout: 3000
});
