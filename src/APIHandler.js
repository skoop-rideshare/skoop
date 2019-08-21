import axios from 'axios'
const URL = process.env.NODE_ENV === 'development' ? 'http://192.168.1.191:5000' : 'https://skoop-bengt.herokuapp.com'

export const handleLoginUser = (username, password) => axios.post(`${URL}/api/users/login`, { user: { email: username, password }})
