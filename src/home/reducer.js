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

const rideRequests = (state = [], action) => {
  switch(action.type) {
    case actions.GET_RIDE_REQUESTS_SUCCESS:
      return action.payload
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
