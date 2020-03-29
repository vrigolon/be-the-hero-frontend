import axios from 'axios';

const api = axios.create({
  baseURL: 'http://be-the-hero-app2.herokuapp.com:80'
})

export default api
