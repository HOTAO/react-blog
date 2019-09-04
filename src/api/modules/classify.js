import request from '../request'

export default {
  getCategory (params) {
    return request.get('/getCategory', { params })
  },
  insertCategory (data) {
    return request.post('/verify/insertCategory', data)
  },
  updateCategory (cid, options) {
    return request.patch(`/verify/updateCategory/${cid}`, options)
  },
  deleteCategory (cid) {
    return request.delete(`/verify/deleteCategory/${cid}`)
  },

  getTags (params) {
    return request.get('/getTags', { params })
  },
  insertTag (data) {
    return request.post('/verify/insertTag', data)
  },
  updateTag (tid, options) {
    return request.patch(`/verify/updateTag/${tid}`, options)
  },
  deleteTag (tid) {
    return request.delete(`/verify/deleteTag/${tid}`)
  }
}
