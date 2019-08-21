export const LOGIN_USER_LOADING = 'LOGIN_USER_LOADING'
export const loginUser = () => {
  return (dispatch) =>  {
    dispatch({type: LOGIN_USER_LOADING})
  }
}
