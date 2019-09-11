import { applyMiddleware, createStore, combineReducers } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import home from './Reducer/home'
import webconfig from './Reducer/webconfig'
import common from './Reducer/common'

const allReducer = {
  home, webconfig, common
}

const store = createStore(combineReducers(allReducer), applyMiddleware(thunk))

export default store