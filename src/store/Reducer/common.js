import api from '../../api/index'

const homeState = {
  hasArticleMenu: false,
  articleMenuInfo: [],
  sourceArticleMenuInfo: [],
  rightNavStatus: false,
  articleMenuTag: '',

}
const SET_ARTICLE_MENU_STATUS = 'SET_ARTICLE_MENU_STATUS'
const SET_ARTICLE_MENU_TAG = 'SET_ARTICLE_MENU_TAG'
const SET_SCORE_ARTICLE_MENU_INFO = 'SET_SCORE_ARTICLE_MENU_INFO'
const SET_RIGHT_NAV_STATUS = 'SET_RIGHT_NAV_STATUS'
const SET_ARTICLE_MENU_INFO = 'SET_ARTICLE_MENU_INFO'

export const setArticleMenuStatus = boolean => dispatch => {
  dispatch(setMenuStatus(boolean))
}
export const setArticleMenuInfo = boolean => dispatch => {
  dispatch(setMenuInfo(boolean))
}
export const setArticleMenuTag = boolean => dispatch => {
  dispatch(setMenuTag(boolean))
}
export const setSourceArticleMenuInfo = boolean => dispatch => {
  dispatch(setSourceMenuInfo(boolean))
}
export const setRightNavStatus = boolean => dispatch => {
  dispatch(setNavStatus(boolean))
}
const setMenuStatus = data => ({
  type: SET_ARTICLE_MENU_STATUS, payload: {
    data
  }
})
const setMenuInfo = data => ({
  type: SET_ARTICLE_MENU_INFO, payload: {
    data
  }
})

const setMenuTag = data => ({
  type: SET_ARTICLE_MENU_TAG, payload: {
    data
  }
})

const setSourceMenuInfo = data => ({
  type: SET_SCORE_ARTICLE_MENU_INFO, payload: {
    data
  }
})

const setNavStatus = data => ({
  type: SET_RIGHT_NAV_STATUS, payload: {
    data
  }
})

export default function reducer (state = homeState, action = {}) {
  switch (action.type) {
    case SET_ARTICLE_MENU_STATUS:
      return Object.assign({}, state, { hasArticleMenu: action.payload.data })
    case SET_ARTICLE_MENU_INFO:
      return Object.assign({}, state, { articleMenuInfo: action.payload.data })
    case SET_ARTICLE_MENU_TAG:
      return Object.assign({}, state, { articleMenuTag: action.payload.data })
    case SET_SCORE_ARTICLE_MENU_INFO:
      return Object.assign({}, state, { sourceArticleMenuInfo: action.payload.data })
    case SET_RIGHT_NAV_STATUS:
      return Object.assign({}, state, { rightNavStatus: action.payload.data })
    default:
      return state
  }
}


