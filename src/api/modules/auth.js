import request from '../request'

export default {
  login (data) {
    return request.post('/login', data)
  }
}
