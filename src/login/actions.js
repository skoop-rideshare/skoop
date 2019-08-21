import { handleLoginUser } from '../APIHandler.js'
export const LOGIN_USER_LOADING = 'LOGIN_USER_LOADING'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR'

export const loginUser = (username,password) => {
  return (dispatch) => {
    dispatch({type: LOGIN_USER_LOADING})
    console.log('hej')
    handleLoginUser(username, password)
      .then(({ data: { user } }) => {
        dispatch({type: LOGIN_USER_SUCCESS, user})
      })
      .catch(() => {
        dispatch({ type: LOGIN_USER_ERROR })
      })
  }
}
