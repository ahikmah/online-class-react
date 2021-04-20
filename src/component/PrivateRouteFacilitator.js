import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function PrivateRouteFacilitator({ Component, ...rest }) {
    const token = localStorage.token;
    const role = localStorage.role;
    return (
        <Route
            {...rest}
            render={(props) =>
                token && role === 'instructor' ? (
                    <Component {...props} />
                ) : (
                    <Redirect to='/dashboard' />
                )
            }
        />
    );
}

export default PrivateRouteFacilitator;
