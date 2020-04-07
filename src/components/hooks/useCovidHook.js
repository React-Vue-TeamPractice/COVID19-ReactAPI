import React, { useState, useEffect } from 'react'
import Axios from 'axios'

//import config
import { API_URL } from '../config/index'

export const CovidHook = async () => {
    try {
        const  { data: { Ukraine } }  = await Axios.get(API_URL)
        return Ukraine
    } catch(e) {
        console.error('Error from useHook: ', e)
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await Axios.get(`${API_URL}/daily`)

        return data.map(({ confirmed, deaths, reportDate: date }) => ({confirmed: confirmed}))
    } catch (e) {
        console.error(e)
    }
}
