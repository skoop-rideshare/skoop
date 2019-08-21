import * as actions from './actions'
import { combineReducers } from 'redux'

const loading = (state = false, action) => {
  switch(action.type) {
    case actions.LOGIN_USER_LOADING:
      return true
    case actions.LOGIN_USER_SUCCESS:
    default:
      return false
  }
}

const user = (state = {}, action) => {
  switch(action.type) {
  case actions.LOGIN_USER_SUCCESS:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  loading,
  user
})
