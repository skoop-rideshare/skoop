import React from 'react'
import { connect } from 'react-redux'
import logo from '../logo.svg'
import LoginComponent from '../login/LoginComponent.jsx'
const styles = {
  headerStyles: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'space-Between',
    top: '0px',
    left: '0px',
    width: '100%',
    padding: '15px',
    boxSizing: 'border-box'
  },
  logoStyle: {
    height: '70px'
  },
  clickableText: {
    margin: '0px 15px',
    color: '#05386B',
    fontSize: '25px',
    cursor: 'pointer',
    '&:hover': {
      color: '#EDF5E1',
    }
  }
}

const Options = ({options}) => {
  console.log('options', options)
  return <div style={{ display: 'flex'}} >
  {options.map((item, index) => (
      <p style={styles.clickableText} key={index}> {item} </p>
    ))}
  </div>
}

const Header = (props) => {
  return <div style={styles.headerStyles}>
    <img src={logo} style={styles.logoStyle} />
    <Options options={['Requests', 'Matches', 'FAQ']}/>
    <LoginComponent/>
  </div>
}

const mapStateToProps = (state) => ({
  user: state.loginReducer.user
})

export default connect(mapStateToProps)(Header)
