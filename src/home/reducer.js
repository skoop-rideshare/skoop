import * as actions from './actions'
import { combineReducers } from 'redux'

const currentMenuChoice = (state = null, action) => {
  switch(action.type) {
  case actions.CHANGE_MENU_CHOICE:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
    currentMenuChoice
})
