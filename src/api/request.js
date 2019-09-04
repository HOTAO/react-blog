import axios from 'axios'
import Qs from 'qs'
import cache from '../cache/index.js'

// const Api = 'http://localhost:4000/api'
// const Api = 'http://www.hotao.work:4000/api'
const Api =
  process.env.NODE_ENV === 'production'
    ? 'http://api.hotao.work/api'
    : 'http://api.hotao.work/api'
// : 'http://localhost:4000/api'
export let API_ROOT = Api

axios.defaults.baseURL = API_ROOT
axios.defaults.headers.Accept = 'application/json'

axios.interceptors.request.use(
  config => {
    const token = cache.lsCache.get('token')
    token && (config.headers['Web-Access-Token'] = token)
    if (
      config.method === 'post' ||
      config.method === 'put' ||
      config.method === 'patch'
    ) {
      config.transformRequest = [
        data => {
          return Qs.stringify(data)
        }
      ]
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    // if (error.response.status === 401) {
    //   store.commit(type.LOGIN_OUT)
    // }
    return Promise.reject(error.response)
  }
)

export default axios
