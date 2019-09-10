import api from '../../api/index'

const webconfigState = {
  baseInfo: {},
  staticleInfo: {}
}
const SET_BASEINFO = 'SET_BASEINFO'
const SET_STATISTICS = 'SET_STATISTICS'

export const getWebConfig = () => dispatch => {
  api.getWebConfig()
    .then(res => {
      dispatch(setWebConfig(res[0]))
    })
    .catch(err => console.log(err))
}
export const getStatistics = () => dispatch => {
  api.getHomeStatistics()
    .then(res => {
      dispatch(setStatistics(res))
    })
    .catch(err => console.log(err))
}

const setWebConfig = data => ({
  type: SET_BASEINFO,
  payload: {
    data
  }
})
const setStatistics = data => ({
  type: SET_STATISTICS,
  payload: {
    data
  }
})
export default function reducer (state = webconfigState, action = {}) {
  switch (action.type) {
    case SET_BASEINFO:
      return Object.assign({}, state, { baseInfo: action.payload.data })
    case SET_STATISTICS:
      return Object.assign({}, state, { staticleInfo: action.payload.data })
    default:
      return state
  }
}


