import Typography from '@mui/material/Typography';
import React from 'react'
import Grid from '@mui/material/Grid';

const Profile = () => {
    return (
        <Grid container direction="row" alignItems="center">
        <Grid item xs={8} >
            <Typography align="right" variant="h4" sx={{ flexGrow: 1 }}> Profile Page of Jamie Doe </Typography>
        </Grid>
      </Grid>
    )
}

export default Profile
