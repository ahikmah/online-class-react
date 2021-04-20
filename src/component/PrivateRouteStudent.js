import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function PrivateRouteStudent({ Component, ...rest }) {
    const token = localStorage.token;
    const role = localStorage.role;
    return (
        <Route
            {...rest}
            render={(props) =>
                token && role === 'student' ? (
                    <Component {...props} />
                ) : (
                    <Redirect to='/dashboard' />
                )
            }
        />
    );
}

export default PrivateRouteStudent;
