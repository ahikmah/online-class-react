import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({ Component, ...rest }) {
    const token = localStorage.token;
    return (
        <Route
            {...rest}
            render={(props) =>
                token ? <Component {...props} /> : <Redirect to='/' />
            }
        />
    );
}

export default PrivateRoute;
