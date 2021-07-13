import axios from 'axios'

const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : 'https://skoop-bengt.herokuapp.com'

const authHeaders = (token) => {
    return {
        headers: {
            'Accept-Version': 1,
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': `Token ${token}`
        }
    }
}

export const handleLoginUser = (username, password) => axios.post(`${BASE_URL}/api/users/login`, { user: { email: username, password } })

export const handleSignUpUser = (username, password) => axios.post(`${BASE_URL}/api/users`, { user: { email: username, password } })

export const handleGetRequests = (token) => axios.get(`${BASE_URL}/api/rides`, authHeaders(token))

export const handleCreateRequest = (token, rideRequest) => axios.get(`${BASE_URL}/api/rides`, {rideRequest, ...authHeaders(token)})
