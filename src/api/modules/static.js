import request from '../request'

export default {
  get_home_statistics () {
    return request.get('/get_home_statistics')
  }
}
