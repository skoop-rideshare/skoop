import React, { useState } from 'react'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { loginUser, createAndLoginUser } from './actions.js'
import CircularProgress from '@material-ui/core/CircularProgress'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'

const styles = {
  paddingBox: {
    display: 'flex',
    justifyContent: 'center',
    padding: '30px'
  },
  clickableText: {
    margin: '0px',
    color: '#05386B',
    fontSize: '25px',
    cursor: 'pointer',
    '&:hover': {
      color: '#EDF5E1',
    }
  }
}

const LoginModal = ({ loading, loginError, dispatch, open, onClose }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return <Dialog open={open} onClose={onClose} style={{ display: 'flex', flexDirection: 'column', color: '#3C3B5F', padding: '60px'}}>
    <DialogTitle> Log in to skoop! </DialogTitle>
    {loading ? (
    <div style={styles.paddingBox}>
      <CircularProgress />
    </div>
  ) : (
    <div style={{ flexDirection: 'column', ...styles.paddingBox }}>
    <FormControl>
      <InputLabel>Username</InputLabel>
      <Input value={username} onChange={(event) => setUsername(event.target.value)} />
    </FormControl>
    <FormControl>
      <InputLabel>Password</InputLabel>
      <Input type='password' value={password} onChange={(event) => setPassword(event.target.value)} />
    </FormControl>
    {loginError && <p>{loginError}</p>}
    <Button onClick={() => dispatch(loginUser(username,password))} style={{ marginTop: '15px'}} variant='contained'> Login </Button>
    <Button onClick={() => dispatch(createAndLoginUser(username,password))} style={{ marginTop: '15px'}} variant='contained'> Sign up </Button>
    </div>
   )}
  </Dialog>
}

const LoginComponent = ({ loading, user, loginError, dispatch }) => {
  const [open, setIsOpen] = useState(false)
  console.log('user', user)
  return <div>
  {!user ? (
    <p style={styles.clickableText} onClick={() => setIsOpen(true)}> Log In </p>
  ) : (
    <p style={styles.clickableText}> Log Out </p>
  )}
      <LoginModal loading={loading} loginError={loginError} dispatch={dispatch} open={open && !user} onClose={() => setIsOpen(false)} />
    </div>
}

const mapStateToProps = (state) => ({
  loading: state.loginReducer.loading,
  loginError: state.loginReducer.error,
  user: state.loginReducer.user
})

export default connect(mapStateToProps)(LoginComponent)
