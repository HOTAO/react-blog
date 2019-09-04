import { applyMiddleware, createStore, combineReducers } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import home from './Reducer/home'

const allReducer = {
  home
}

const store = createStore(combineReducers(allReducer), applyMiddleware(logger, thunk))

export default store