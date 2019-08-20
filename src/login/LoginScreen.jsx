import React, { useState } from 'react'
import FilledInput from '@material-ui/core/FilledInput'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'

const LoginScreen = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const useHandler = (handler) => (event) => handler(event.target.value)
  return <div style={{ display: 'flex', flexDirection: 'column', color: '#3C3B5F'}}>
    <h1> Welcome to Skoop! </h1>
    <p> This page is under construction </p>
    <FormControl>
    <InputLabel>Name</InputLabel>
    <Input value={username} onChange={useHandler(setUsername)} />
    </FormControl>
    <FormControl>
      <InputLabel>Password</InputLabel>
      <Input value={password} onChange={useHandler(setPassword)} />
    </FormControl>
    <Button style={{ marginTop: '15px'}} variant='contained'> Login </Button>
  </div>
}

export default LoginScreen
