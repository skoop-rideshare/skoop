import * as actions from './actions'

const loading = (state = false, action) => {
  switch(action.type) {
    case actions.LOGIN_USER_LOADING:
      return true
    default:
      return false
  }
}

export default loading
