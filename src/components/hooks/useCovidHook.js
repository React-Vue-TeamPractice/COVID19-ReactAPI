import React, { useState, useEffect } from 'react'
import Axios from 'axios'

//import config
import { API_URL } from '../config/index'

export const CovidHook = async () => {

    try {
        const { data: { Ukraine } } = await Axios.get(API_URL)

        return { Ukraine }
    } catch(e) {
        console.error('Error from useHook: ', e)
    }
        
}