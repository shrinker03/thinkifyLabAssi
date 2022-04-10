import React from 'react'
import { Button, Grid} from '@mui/material';
// import Filter from './Filter';
import EmailList from './EmailList';
import EmailBodyDetails from './EmailBodyDetails';
import { Link } from 'react-router-dom';


const EmailBody = () => {
  return (
    <Grid container padding={2}>
        {/* <Grid item marginBottom={2} sm={4}>
          <Filter />
        </Grid> */}
        <Grid item paddingLeft={9} paddingBottom={2}>
          <Button style={{background: '#E54065'}}>
            <Link style={{textDecoration: 'none', color: '#F4F5F9'}} to='/'>
              Go Back
            </Link>
          </Button>
        </Grid>
      <Grid container >
        <Grid item xs={12} sm={5}>
          <EmailList width='30vw' />
        </Grid>
        <EmailBodyDetails />
      </Grid>
    </Grid>
  )
}

export default EmailBody