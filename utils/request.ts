import axios from 'axios'

const $axios = axios.create({
  baseURL: 'http://127.0.0.1:3001',
})

class RequestError extends Error {}

$axios.interceptors.response.use(undefined, (err) => {
  return Promise.reject(new RequestError(err.message))
})

export { $axios }
