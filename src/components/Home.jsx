import React from 'react'
import { Grid } from '@mui/material';
import EmailList from './EmailList';
// import Filter from './Filter';

const Home = () => {
    return (
      <Grid container padding={4}>  
        {/* <Grid item marginBottom={2} sm={4}>
          <Filter />
        </Grid> */}
        <Grid item paddingLeft={4}>
            <EmailList width={'90vw'} />    
        </Grid>
      </Grid>
    )
}

export default Home