import React from 'react'
import {
    Switch,
    Route, Link
} from "react-router-dom";

//import components
import App from "../App";

export default() => {
    return(
        <Switch>
            <Route path='/' components={App}/>
        </Switch>
    )
}

