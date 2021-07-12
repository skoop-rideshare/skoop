import React from 'react'
import { connect } from 'react-redux'

const MatchComponent = ({ user }) => {
  return <div style={{flex: 1}}>
   <p> Match!! </p>
  </div>
}

const mapStateToProps = (state) => ({
  user: state.loginReducer.user
})

export default connect(mapStateToProps)(MatchComponent)
