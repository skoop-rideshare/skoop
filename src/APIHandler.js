import axios from 'axios'
const URL = process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : 'https://skoop-bengt.herokuapp.com'

export const handleLoginUser = (username, password) => axios.post(`${URL}/api/users/login`, { user: { email: username, password }})

export const handleSignUpUser = (username, password) => axios.post(`${URL}/api/users/`, { user: { email: username, password }})
