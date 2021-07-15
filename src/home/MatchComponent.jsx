import React, { useEffect } from 'react'
import { connect } from 'react-redux'

const MatchComponent = ({ user }) => {
  useEffect(() => {
    console.log('match')
  }, [])

  return (
    <div style={{ flex: 1 }}>
      <p> Match!! </p>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.loginReducer.user
})

export default connect(mapStateToProps)(MatchComponent)
