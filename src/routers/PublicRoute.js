import React from 'react';
import PropTypes from 'prop-types';

import { Redirect, Route } from 'react-router-dom';


export const PublicRoute = ({
    isAuthenticate,
    component: Component,
    ...rest
}) => {
    return (
        <Route {...rest} component={
            (props) => (
                ( !isAuthenticate) ? <Component {...props} /> :  <Redirect to='/' />
            )
        } />
    )
}


PublicRoute.propTypes = {
    isAuthenticate: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
}