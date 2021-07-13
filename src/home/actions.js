import { handleGetRequests } from '../APIHandler.js'

export const CHANGE_MENU_CHOICE = 'CHANGE_MENU_CHOICE'
export const GET_RIDE_REQUESTS_SUCCESS = 'GET_RIDE_REQUESTS_SUCCESS'
export const GET_RIDE_REQUESTS_ERROR = 'GET_RIDE_REQUESTS_ERROR'

export const changeMenuChoice = (choice) => {
  return (dispatch) => {
    dispatch({ type: CHANGE_MENU_CHOICE, payload: choice })
  }
}

export const getRideRequests = (token) => {
  return async (dispatch) => {
    try {
      const requests = await handleGetRequests(token)
      dispatch({ type: GET_RIDE_REQUESTS_SUCCESS, payload: requests.data })
    } catch (error) {
      dispatch({ type: GET_RIDE_REQUESTS_ERROR, payload: error })
    }
  }
}
