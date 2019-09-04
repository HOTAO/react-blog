import api from '../../api/index'

const homeState = {
  articleData: {}
}
const SET_ARTICLE_DATA = 'SET_ARTICLE_DATA'

export const getArticleData = params => dispatch => {
  api.getArticlesForWeb(params)
    .then(res => {
      dispatch(setArticleData(res))
    })
    .catch(err => console.log(err))
}

const setArticleData = data => ({
  type: SET_ARTICLE_DATA, payload: {
    data
  }
})

export default function reducer (state = homeState, action = {}) {
  switch (action.type) {
    case SET_ARTICLE_DATA:
      return Object.assign({}, state, { articleData: action.payload.data })
    default:
      return state
  }
}


