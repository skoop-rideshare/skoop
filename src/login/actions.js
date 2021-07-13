import { handleLoginUser, handleSignUpUser } from '../APIHandler.js'
export const LOGIN_USER_LOADING = 'LOGIN_USER_LOADING'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR'
export const LOGOUT_USER = 'LOGOUT_USER'

export const logInUser = (username, password) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER_LOADING })
    handleLoginUser(username, password)
      .then(({ data: { user } }) => {
        dispatch({ type: LOGIN_USER_SUCCESS, payload: user })
      })
      .catch((error) => {
        dispatch({ type: LOGIN_USER_ERROR, payload: error })
      })
  }
}

export const logOutUser = () => (dispatch) => dispatch({ type: LOGOUT_USER })

export const createAndLoginUser = (username, password) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER_LOADING })
    handleSignUpUser(username, password)
      .then(({ data: { user } }) => {
        console.log({ user })
        dispatch({ type: LOGIN_USER_SUCCESS, payload: user })
      })
      .catch((error) => {
        dispatch({ type: LOGIN_USER_ERROR, payload: error })
      })
  }
}
