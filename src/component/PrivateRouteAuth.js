import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function PrivateRouteAuth({ Component, ...rest }) {
    const token = localStorage.token;
    return (
        <Route
            {...rest}
            render={(props) =>
                !token ? <Component {...props} /> : <Redirect to='/dashboard' />
            }
        />
    );
}

export default PrivateRouteAuth;
