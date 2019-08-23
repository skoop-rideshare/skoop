import React from 'react'
import { connect } from 'react-redux'
import Header from './Header.jsx'

const HomeScreen = ({ user }) => {
  console.log('user: ', user)
  return <div>
   <Header />
  </div>
}

const mapStateToProps = (state) => ({
  user: state.loginReducer.user
})

export default connect(mapStateToProps)(HomeScreen)
