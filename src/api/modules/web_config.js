import request from '../request'

export default {
  getWebConfig () {
    return request.get('/getWebConfig')
  },
  insertWebConfig (data) {
    return request.post('/verify/insertWebConfig', data)
  },
  updateWebConfig (id, data) {
    return request.patch(`/verify/updateWebConfig/${id}`, data)
  },

  getResume () {
    return request.get('/getResume')
  },
  insertResume (data) {
    return request.post('/verify/insertResume', data)
  },
  updateResume (id, data) {
    return request.patch(`/verify/updateResume/${id}`, data)
  },

  getMe () {
    return request.get('/getMe')
  },
  insertMe (data) {
    return request.post('/verify/insertMe', data)
  },
  updateMe (id, data) {
    return request.patch(`/verify/updateMe/${id}`, data)
  },

  getFriends (params) {
    return request.get('/getFriends', { params })
  },
  insertFriend (data) {
    return request.post('/verify/insertFriend', data)
  },
  deleteFriend (fid) {
    return request.delete(`/verify/deleteFriend/${fid}`)
  },
  updateFriend (fid, data) {
    return request.patch(`/verify/updateFriend/${fid}`, data)
  },

  getFriendType (params) {
    return request.get('/getFriendType', { params })
  },
  insertFriendType (data) {
    return request.post('/verify/insertFriendType', data)
  },
  deleteFriendType (ftid) {
    return request.delete(`/verify/deleteFriendType${ftid}`)
  },
  updateFriendType (ftid, data) {
    return request.patch(`/verify/updateFriendType/${ftid}`, data)
  }
}
