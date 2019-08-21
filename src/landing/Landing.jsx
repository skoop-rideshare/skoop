import React, { useState } from 'react';
import Button from '@material-ui/core/Button'

const styles = {
    klass: {
        fontSize: '1px'
    },

    buttonKlass: {
        color: 'cornsilk',
        fontWeight: 'bold',
        backgroundColor: 'mediumaquamarine'
    }
}

const Landing = () =>  {
    const [match, setmatch] = useState(false)
    console.log('match: ', match)
    return <div style = {{ display : 'flex', flexDirection: 'column'  }}> 
          <h1 className={styles.klass} style={{ color: `${match ? 'red' : 'black'}` }}> Welcome  </h1> 
          <Button variant='contained' style = {{marginBottom: '15px', ...styles.buttonKlass}} onClick={() => setmatch(!match)}> Match Me Up! </Button>
          <Button variant='contained' style = {styles.buttonKlass} onClick={() => setmatch(!match)}> Account Settings </Button>
        </div>
}

export default Landing