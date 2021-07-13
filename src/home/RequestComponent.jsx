import { Input, FormControl, InputLabel, Button, Checkbox, FormControlLabel } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { getRideRequests } from './actions.js'

const styles = {
  requestStyle: {
    padding: '15px',
    borderRadius: '5px',
    border: '1px solid lightgaey',
    marginBottom: '15px',
    boxShadow: '1px 1px 1px 1px lightgrey'
  }
}

const Request = ({request: {fromAddress, toAddress, driver}}) => {
  return (
    <div style={styles.requestStyle}>
      <p> Start: {fromAddress}</p>
      <p> Destination: {toAddress}</p>
    </div>
  )
} 

const RequestComponent = ({dispatch, user, rideRequests}) => {
  useEffect(() => {
    dispatch(getRideRequests(user.token))
  }, [])

  const [fromAddress, setFromAddress] = useState('')
  const [toAddress, setToAddress] = useState('')
  const [driver, setDriver] = useState(false)

  return (
    <div style={{ flex: 1 }}>
      <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white', borderRadius: '5px', padding: '45px' }}>
        <h1 style={{ color: 'black', padding: '15px 30px' }}>
          What's your destination?
        </h1>
        <FormControl>
          <InputLabel> Start </InputLabel>
          <Input value={fromAddress} onChange={(event) => setFromAddress(event.target.value)}/>
        </FormControl>
        <FormControl>
          <InputLabel> Destination </InputLabel>
          <Input value={toAddress} onChange={(event) => setToAddress(event.target.value)}/>
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
        <Button onClick={() => dispatch(getRideRequests(user.token))} variant='contained'> Submit </Button>
      </div>
      <h2>
        Pending ride requests
      </h2>
      {rideRequests.map((item, index) => (
        <Request key={index} request={item} />
      ))}

    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.loginReducer.user,
  rideRequests: state.homeReducer.rideRequests
})

export default connect(mapStateToProps)(RequestComponent)
