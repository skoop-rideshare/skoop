import * as actions from './actions'
import { combineReducers } from 'redux'

const currentMenuChoice = (state = null, action) => {
  switch (action.type) {
    case actions.CHANGE_MENU_CHOICE:
      return action.payload
    default:
      return state
  }
}
export const DELETE_RIDE_REQUEST_SUCCESS = 'DELETE_RIDE_REQUEST_SUCCESS'
export const DELETE_RIDE_REQUEST_ERROR = 'DELETE_RIDE_REQUEST_ERROR'

const rideRequests = (state = [], action) => {
  switch (action.type) {
    case actions.GET_RIDE_REQUESTS_SUCCESS:
      return action.payload
    case actions.CREATE_RIDE_REQUEST_SUCCESS:
      return [action.payload, ...state]
    case actions.DELETE_RIDE_REQUEST_SUCCESS:
      return state.filter(({_id}) => _id !== action.payload)
    case actions.CREATE_RIDE_REQUEST_ERROR:
    case actions.GET_RIDE_REQUESTS_ERROR:
      return state
    default:
      return state
  }
}

export default combineReducers({
  currentMenuChoice,
  rideRequests
})
