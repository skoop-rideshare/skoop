import { handleGetRequests, handleCreateRequest, handleDeleteRequest } from '../APIHandler.js'

export const CHANGE_MENU_CHOICE = 'CHANGE_MENU_CHOICE'
export const GET_RIDE_REQUESTS_SUCCESS = 'GET_RIDE_REQUESTS_SUCCESS'
export const GET_RIDE_REQUESTS_ERROR = 'GET_RIDE_REQUESTS_ERROR'
export const CREATE_RIDE_REQUEST_SUCCESS = 'CREATE_RIDE_REQUEST_SUCCESS'
export const CREATE_RIDE_REQUEST_ERROR = 'CREATE_RIDE_REQUEST_ERROR'
export const DELETE_RIDE_REQUEST_SUCCESS = 'DELETE_RIDE_REQUEST_SUCCESS'
export const DELETE_RIDE_REQUEST_ERROR = 'DELETE_RIDE_REQUEST_ERROR'

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

export const createRideRequest = (token, rideRequest) => {
  return async (dispatch) => {
    try {
      console.log({rideRequest})
      const request = await handleCreateRequest(token, rideRequest)
      dispatch({ type: CREATE_RIDE_REQUEST_SUCCESS, payload: request.data })
    } catch (error) {
      dispatch({ type: CREATE_RIDE_REQUEST_ERROR, payload: error })
    }
  }
}

export const deleteRideRequest = (token, rideRequestID) => {
  return async (dispatch) => {
    try {
      const request = await handleDeleteRequest(token, rideRequestID)
      dispatch({ type: DELETE_RIDE_REQUEST_SUCCESS, payload: rideRequestID })
    } catch (error) {
      dispatch({ type: DELETE_RIDE_REQUEST_ERROR, payload: error })
    }
  }
}