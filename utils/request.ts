import axios from 'axios'

const $axios = axios.create({
  baseURL: 'http://127.0.0.1:3001',
})

export { $axios }
