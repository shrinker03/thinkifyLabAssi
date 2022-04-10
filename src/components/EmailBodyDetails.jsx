import React, { useEffect, useState } from 'react'
import { Grid, Paper, Typography } from '@mui/material';
import { useParams } from 'react-router-dom'
import {useLocation} from 'react-router-dom'
import Moment from 'react-moment';
import AvatarIcon from './AvatarIcon';

const EmailBodyDetails = () => {
    const param = useParams();
    const location = useLocation();
    const userName = location.state.name;
    const emailDate = location.state.date;

    const [body, setBody] = useState('');
  
    const url = `https://flipkart-email-mock.now.sh/?id=${param.id}`;
  
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setBody(data))
    }, [url])

    return (
        <Grid item xs={12} sm={7}>
          <Paper style={{minHeight: 50, padding: 20, width: '90%'}}>
                <Grid container>
                    <Grid item sm={1}>
                        <AvatarIcon initial={userName[0]} />
                    </Grid>
                    <Grid item sm={11}>
                        <Typography variant='h5'>
                            {userName[0].toUpperCase() + userName.slice(1)}
                        </Typography>
                        <p>
                            <Moment format="YYYY/MM/DD h:mma" date={emailDate} />
                        </p>
                        <span>
                            {body.body}
                        </span>
                    </Grid>
                </Grid>
          </Paper>
        </Grid>
    )
}

export default EmailBodyDetails