import React from 'react'
import { connect } from 'react-redux'

const FAQComponent = ({ user }) => {
  return (
    <div style={{ display: 'flex', width: '65%', textAlign: 'center', flexDirection: 'column'}}>
      <h2> We want less cars on the road. 🚗</h2>
      <p>
      Tired of long queues when commuting? <b>skoop</b> up someone who is going the same route. 
      Don't have a car? get <b>skooped</b> up. Find a commuting buddy, save on gas, and the environment ♻️.
      </p>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.loginReducer.user
})

export default connect(mapStateToProps)(FAQComponent)
