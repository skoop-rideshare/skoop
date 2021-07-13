import React from 'react'
import { connect } from 'react-redux'
import FAQComponent from './FAQComponent.jsx'
import Header from './Header.jsx'
import MatchComponent from './MatchComponent.jsx'
import RequestComponent from './RequestComponent.jsx'

const HomeScreen = ({ user, currentMenuChoice }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Header />
      {currentMenuChoice === 'TRIPS' && <RequestComponent />}
      {currentMenuChoice === 'MATCHES' && <MatchComponent />}
      {currentMenuChoice === 'INFO' && <FAQComponent />}
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.loginReducer.user,
  currentMenuChoice: state.homeReducer.currentMenuChoice
})

export default connect(mapStateToProps)(HomeScreen)
