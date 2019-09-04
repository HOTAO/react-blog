import request from '../request'

export default {
  getArticlesForWeb (params) {
    return request.get('/getArticlesForWeb', { params })
  },
  getArticlesForServer (params) {
    return request.get('/verify/getArticlesForServer', { params })
  },
  getArticleByTag (tid) {
    return request.get(`/getArticleByTag/${tid}`)
  },
  getArticleInfoById (aid) {
    return request.get(`/getArticleInfoById/${aid}`)
  },
  insertArticle (data) {
    return request.post('/verify/insertArticle', data)
  },
  updateArticleById (aid, options) {
    return request.patch(`/verify/updateArticleById/${aid}`, options)
  },
  updateArticleByCateGoryId (cid, options) {
    return request.patch(`/verify/updateArticleByCateGoryId/${cid}`, options)
  },
  updateArticleByStatus (aid, options) {
    return request.patch(`/verify/updateArticleByStatus/${aid}`, options)
  },
  deleteArticleById (aid) {
    return request.delete(`/verify/deleteArticleById/${aid}`)
  }
}
