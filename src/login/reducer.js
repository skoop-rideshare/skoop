import * as actions from './actions'
import { combineReducers } from 'redux'

const loading = (state = false, action) => {
  switch(action.type) {
    case actions.LOGIN_USER_LOADING:
      return true
    case actions.LOGIN_USER_SUCCESS:
    case actions.LOGIN_USER_ERROR:
    default:
      return false
  }
}

const error = (state=null, action) => {
  switch(action.type) {
    case actions.LOGIN_USER_ERROR:
      return action.payload
    case actions.LOGIN_USER_LOADING:
      return state
    case actions.LOGIN_USER_SUCCESS:
      return state
    default:
      return state
  }
}

const user = (state = null, action) => {
  switch(action.type) {
  case actions.LOGIN_USER_SUCCESS:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  loading,
  user,
  error
})
