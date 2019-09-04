import request from '../request'
import axios from 'axios'

export default {
  getUploadToken () {
    return request.get('/getUploadToken')
  },
  getHomeStatistics () {
    return request.get('/getHomeStatistics')
  },
  getSysLog (params) {
    return request.get('/verify/getSysLog', { params })
  },
  /**
   * 上传图片到七牛
   */
  uploadToQiniu (params) {
    return axios.post('http://up-z2.qiniup.com', params, {
      headers: {
        'content-type': 'multipart/form-data'
      },
      withCredentials: false
    })
  }
}
