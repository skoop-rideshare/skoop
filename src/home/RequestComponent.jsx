import { Input, FormControl, InputLabel, Button, Checkbox, FormControlLabel, Icon } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getRideRequests, createRideRequest, deleteRideRequest } from './actions.js'
import deleteLogo from '../delete_forever.svg'
// import DeleteOutlined from '@material-ui/icons/DeleteOutlined'

const styles = {
  requestStyle: {
    padding: '30px',
    borderRadius: '5px',
    border: '1px solid lightgaey',
    marginBottom: '15px',
    boxShadow: '0px 0px 15px 0px lightgray',
    backgroundColor: 'white',
    position: 'relative'
  },
  deleteStyle: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    cursor: 'pointer'
  },
  textStyle: {
    margin: '0px 0px 15px 0px'
  }
}

const Request = ({ dispatch, request: { fromAddress, toAddress, driver, _id }, token }) => {
  console.log({_id})
  return (
    <div style={styles.requestStyle}>
      <img onClick={() => dispatch(deleteRideRequest(token, _id))} src={deleteLogo} style={styles.deleteStyle}/>
      <p style={styles.textStyle}> Start: {fromAddress}</p>
      <p style={styles.textStyle}> Destination: {toAddress}</p>
      <p style={styles.textStyle}> Driver: {driver ? 'yes' : 'no'}</p>
    </div>
  )
}

const RequestComponent = ({ dispatch, user, rideRequests }) => {
  useEffect(() => {
    dispatch(getRideRequests(user.token))
  }, [])

  const [fromAddress, setFromAddress] = useState('')
  const [toAddress, setToAddress] = useState('')
  const [driver, setDriver] = useState(false)

  return (
    <div style={{ width: '65%', textAlign: 'center'}}>
      <h1> skoop or get skooped up </h1>
      <p> Add your commute here, and we will try to find a perfect match for you! </p>
      <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white', borderRadius: '5px', padding: '45px', boxShadow: '0px 0px 15px 0px lightgray'}}>
        <h3 style={{ color: 'black', padding: '15px 30px'}}>
          What's your commute?
        </h3>
        <FormControl>
          <InputLabel> Start </InputLabel>
          <Input value={fromAddress} onChange={(event) => setFromAddress(event.target.value)} />
        </FormControl>
        <FormControl>
          <InputLabel> Destination </InputLabel>
          <Input value={toAddress} onChange={(event) => setToAddress(event.target.value)} />
        </FormControl>
        <FormControl>
          <FormControlLabel
            style={{ color: 'black' }}
            control={
              <Checkbox
                color='primary'
                checked={driver}
                onChange={() => setDriver(!driver)}
              />
            }
            label='Driver'
          />
        </FormControl>
        <Button onClick={() => dispatch(createRideRequest(user.token, {driver, fromAddress, toAddress}))} variant='contained'> Submit </Button>
      </div>
      {rideRequests.length !== 0 && (
        <div>
        <h2>
        Pending commutes 
      </h2>
      <p> Our algotihms are working hard to find you a commuting buddy for these commutes. </p>
      </div>)}
      {rideRequests.map((item, index) => (
        <Request dispatch={dispatch} key={index} request={item} token={user.token}/>
      ))}

    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.loginReducer.user,
  rideRequests: state.homeReducer.rideRequests
})

export default connect(mapStateToProps)(RequestComponent)
