import axios from "axios";
export default axios.create({
  baseURL: "http://8c951318.ngrok.io",
  timeout: 3000
});
