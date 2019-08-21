import React, { useState } from 'react'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { loginUser } from './actions.js'
import CircularProgress from '@material-ui/core/CircularProgress';

const LoginScreen = ({ loading, dispatch }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  if (loading) return <CircularProgress/>
  return <div style={{ display: 'flex', flexDirection: 'column', color: '#3C3B5F'}}>
    <h1> Welcome to Skoop! </h1>
    <p> This page is under construction </p>
    <FormControl>
    <InputLabel>Username</InputLabel>
    <Input value={username} onChange={(event) => setUsername(event.target.value)} />
    </FormControl>
    <FormControl>
      <InputLabel>Password</InputLabel>
      <Input type='password' value={password} onChange={(event) => setPassword(event.target.value)} />
    </FormControl>
    <Button onClick={() => dispatch(loginUser(username,password))}style={{ marginTop: '15px'}} variant='contained'> Login </Button>
  </div>
}

const mapStateToProps = (state) => ({
  loading: state.loginReducer.loading
})

export default connect(mapStateToProps)(LoginScreen)
