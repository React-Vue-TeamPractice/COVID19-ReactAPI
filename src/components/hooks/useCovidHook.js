import React, { useState, useEffect } from 'react'
import Axios from 'axios'


//import config
import { API_URL } from '../config/index'

export const CovidHook = () => {
    
    const [date, setDate] = useState({})

    useEffect(() => {
        Axios.get(API_URL)
        .then(res => {
            const country = res.data
            console.log(res)
            setDate(country)
        })
    }, [])
        
        console.log('Date Array: ',date)

    return (
        <>
            Date 
        </>
    )

}