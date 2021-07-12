import React, { useState } from 'react'
import { connect } from 'react-redux'
import logo from '../logo.svg'
import LoginComponent from '../login/LoginComponent.jsx'
import { changeMenuChoice } from './actions'

const styles = {
  headerStyles: {
    display: 'flex',
    justifyContent: 'space-Between',
    top: '0px',
    left: '0px',
    width: '100%',
    padding: '15px',
    boxSizing: 'border-box',
    border: '1px solid black'
  },
  logoStyle: {
    height: '70px'
  },
  clickableText: {
    margin: '0px 15px',
    font: 'sans-serif',
    fontSize: '25px',
    cursor: 'pointer',
    '&:hover': {
      color: '#EDF5E1',
    }
  }
}

const Options = ({dispatch, options, currentChoice}) => {
  console.log({currentChoice})
  return <div style={{display: 'flex', alignItems: 'center'}} >
  {options.map((item, index) => (
      <p style={{...styles.clickableText, color: item == currentChoice ? 'green' : '#05386B' }} onClick={() => dispatch(changeMenuChoice(item))} key={index}> {item} </p>
    ))}
  </div>
}

const Header = ({user, dispatch, currentChoice}) => {
  const options = user === null ? ['FAQ'] : ['Requests', 'Matches', 'FAQ']
  return <div style={styles.headerStyles}>
    <img src={logo} style={styles.logoStyle} />
    <Options dispatch={dispatch} options={options} currentChoice={currentChoice}/>
    <LoginComponent/>
  </div>
}

const mapStateToProps = (state) => ({
  user: state.loginReducer.user,
  currentChoice: state.homeReducer.currentMenuChoice
})

export default connect(mapStateToProps)(Header)
