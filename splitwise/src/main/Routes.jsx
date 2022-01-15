import React from 'react'
import { Switch, Route } from 'react-router'
import Login from '../modules/Login/index.tsx'

function AllRoutes() {

    return (
        <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/login' component={Login} />
        </Switch>
    )
}

export default AllRoutes;