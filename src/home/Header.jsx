import React, { useState } from 'react'
import { connect } from 'react-redux'
import logo from '../logo.svg'
import LoginComponent from '../login/LoginComponent.jsx'
import { changeMenuChoice } from './actions'

const styles = {
  headerStyles: {
    display: 'flex',
    justifyContent: 'space-Between',
    alignItems: 'center',
    top: '0px',
    left: '0px',
    width: '100%',
    padding: '15px',
    boxSizing: 'border-box',
    boxShadow: '1px 1px 1px 1px lightgrey',
    marginBottom: '30px',
    backgroundColor: 'white'
  },
  logoStyle: {
    height: '60px',
    color: 'black'
  },
  clickableText: {
    margin: '15px 15px',
    font: 'sans-serif',
    fontSize: '25px',
    cursor: 'pointer',
    '&:hover': {
      color: '#EDF5E1'
    }
  }
}

const Options = ({ dispatch, options, currentChoice }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {options.map((item, index) => (
        <p style={{ ...styles.clickableText, color: item == currentChoice ? 'green' : 'black' }} onClick={() => dispatch(changeMenuChoice(item))} key={index}> {item} </p>
      ))}
    </div>
  )
}

const Header = ({ user, dispatch, currentChoice }) => {
  const options = user === null ? ['INFO'] : ['TRIPS', 'MATCHES', 'INFO']
  return (
    <div style={styles.headerStyles}>
      <img src={logo} style={styles.logoStyle} />
      <Options dispatch={dispatch} options={options} currentChoice={currentChoice} />
      <LoginComponent />
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.loginReducer.user,
  currentChoice: state.homeReducer.currentMenuChoice
})

export default connect(mapStateToProps)(Header)
