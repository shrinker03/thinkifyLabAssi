import React from 'react';
import {Grid, Paper, Typography} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Moment from 'react-moment';
import AvatarIcon from './AvatarIcon';
import { useParams } from 'react-router-dom';

const Email = ({name, from, subject, des, date, id, width}) => {
    const param = useParams();
    const navigate = useNavigate();
    const activeBgColor = param.id === id;

    const paperStyling = {
        minHeight: 50,
        padding: 10, 
        width: width, 
        background: activeBgColor ? '#f2f2f2' : '', 
        border: activeBgColor ? '1px solid red' : '1px solid #CFD2DC'
    }

    return (
        <Grid container>
            <Paper className='email-paper' style={paperStyling}>
                <Grid container paddingLeft={2} style={{cursor: 'pointer'}} onClick={() => {navigate(`/body/${id}`, {state: {name, date}})}}>
                    <Grid item style={{marginRight: 25}}>
                        <AvatarIcon initial={name[0]} />
                    </Grid>
                    <Grid item style={{color: '#636363'}}>
                        <Typography>From: <span style={{fontWeight: 600}}>{name}</span> <a href = {`mailto: ${from}`} style={{fontWeight: 'bold', textDecoration: 'none', color: '#636363', opacity: '0.8'}}>{`<${from}>`}</a></Typography>
                        <Typography>Subject: <span style={{fontWeight: 600}}>{subject}</span></Typography>
                        <Typography style={{paddingTop: 8, paddingBottom: 8}}>{width === '90vw' ? des : des.substring(0, 40)}...</Typography>
                        <Typography><Moment format="YYYY/MM/DD h:mma" date={date} /></Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Email