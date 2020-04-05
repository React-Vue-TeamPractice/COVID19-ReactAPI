import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import style from '../style/index.css'

const Cards = (props) => {
    console.log(props)
    return (
        <div className='container'>
                <Grid container spacing={3} justify='center'>
                    <Grid item component={Card}>
                        <CardContent>
                            <Typography color='textSecondary' gutterBottom>
                                Infected
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
        </div>
    )
}

export default Cards