import React from 'react'
import LoginScreen from '../login/LoginScreen.jsx'
import { connect } from 'react-redux'

const HomeScreen = ({ user }) => {
  console.log('user: ', user)
  return <div>
  {!user ? (
    <LoginScreen />
  ) : (
    <div> {`Logged in as ${user.email}`}</div>
  )}
  </div>
}

const mapStateToProps = (state) => ({
  user: state.loginReducer.user
})

export default connect(mapStateToProps)(HomeScreen)
