import React from 'react';
import PropTypes from 'prop-types';

import { Redirect, Route } from 'react-router-dom';


export const PrivateRoute = ({
    isAuthenticate,
    component: Component,
    ...rest
}) => {
    if (rest.location.search) {
        localStorage.setItem('path', rest.location.pathname+rest.location.search)
    } else {
        localStorage.setItem('path', rest.location.pathname)
    }
    return (
        <Route {...rest} component={
            (props) => (
                (isAuthenticate) ? <Component {...props} /> :  <Redirect to='/login' />
            )
        } />
    )
}


PrivateRoute.propTypes = {
    isAuthenticate: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
}