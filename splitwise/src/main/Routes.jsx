import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../modules/Login/index.tsx'


export default () => {

    return (
        <Routes>
            <Route path='/login' component={Login} />
        </Routes>
    )
}