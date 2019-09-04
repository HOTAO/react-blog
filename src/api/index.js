import article from './modules/article'
import classify from './modules/classify'
import webConfig from './modules/web_config'
import common from './modules/common'
import auth from './modules/auth'
import comments from './modules/comments'

const api = {
  ...article,
  ...classify,
  ...webConfig,
  ...common,
  ...auth,
  ...comments
}

export default api
