import React from 'react'
import { connect } from 'react-redux'

const RequestComponent = ({ user }) => {
  return <div style={{flex: 1}}>
   <p> Requests!! </p>
  </div>
}

const mapStateToProps = (state) => ({
  user: state.loginReducer.user
})

export default connect(mapStateToProps)(RequestComponent)
