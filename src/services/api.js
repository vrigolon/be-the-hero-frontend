import axios from 'axios';

const api = axios.create({
  baseURL: 'http://be-the-hero-app2.herokuapp.com/'
})

export default api
