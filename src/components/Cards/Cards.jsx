import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import style from '../style/index.css'
import {light} from "@material-ui/core/styles/createPalette";

const Cards = ({data: { confirmed, recovered, deaths, date }}) => {
    if(!confirmed === undefined || null) return 'Loading...';
    console.log('Cards', confirmed)
    return (
        <div className='container'>
                <Grid container spacing={3} justify='center'>
                    <Grid item component={Card}>
                        <CardContent>
                            <Typography color='textSecondary' gutterBottom>
                                Infected
                            </Typography>
                             <Typography varaint='h5'>1{confirmed}</Typography>
                            <Typography colr='textSecondary'>Date</Typography>
                            <Typography variant='body2'>Number of active cases of Covid</Typography>
                        </CardContent>
                    </Grid>

                    <Grid item component={Card}>
                        <CardContent>
                            <Typography color='textSecondary' gutterBottom>
                            Recovered
                            </Typography>
                            <Typography varaint='h5'>{recovered}</Typography>
                            <Typography colr='textSecondary'>Date</Typography>
                            <Typography variant='body2'>Number of recoveries  of Covid</Typography>
                        </CardContent>
                    </Grid>

                    <Grid item component={Card}>
                        <CardContent>
                            <Typography color='textSecondary' gutterBottom>
                                Deaths
                            </Typography>
                            <Typography varaint='h5'>{deaths}</Typography>
                            <Typography colr='textSecondary'>Date</Typography>
                            <Typography variant='body2'>Number of Deaths cases of Covid</Typography>
                        </CardContent>
                    </Grid>
                </Grid>
        </div>
    )
}

export default Cards
