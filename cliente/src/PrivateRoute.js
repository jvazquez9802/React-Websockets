import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useAuth } from './AuthContext'

export function PrivateRouteNotCurrent( { component: Component, ...rest } ){
    
    const { currentUser } = useAuth()

    return (
        <Route
            { ...rest }
            render={ props => {
                return currentUser ? <Component {...props} /> : <Redirect to="/" />
            }}
        ></Route>
    )
}

export function PrivateRouteCurrent( { component: Component, ...rest } ){
    
    const { currentUser } = useAuth()

    return (
        <Route
            { ...rest }
            render={ props => {
                return !currentUser ? <Component {...props} /> : <Redirect to="/info" />
            }}
        ></Route>
    )
}