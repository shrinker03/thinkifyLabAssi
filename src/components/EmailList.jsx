import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material';
import Email from './Email';

const EmailList = ({width}) => {
  const [emails, setEmails] = useState([]);
  
  const url = 'https://flipkart-email-mock.vercel.app/'

  useEffect(() => {
    fetch(url)
        .then((res) => res.json())
        .then((data) => setEmails(data))
  }, [])

  return (
    <Grid container>  
      <Grid container spacing={3} justifyContent='center'>
        {emails?.list?.map((e) => (
          <Grid item key={e.id}>
            <Email key={e.id} email={e} width={width} id={e.id} name={e.from.name} from={e.from.email} subject={e.subject} des={e.short_description} date={e.date} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

export default EmailList