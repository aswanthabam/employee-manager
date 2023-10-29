import axios from "axios";

export default function APICall() {
  var token = localStorage.getItem('token')
  return axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL + 'api/',
    headers: {
      'Authorization':`Bearer ${token}`
    }
  })
}