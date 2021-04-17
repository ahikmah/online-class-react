import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({ Component, isLogin, ...rest }) {
    console.log(isLogin, rest.location.pathname);
    return (
        <Route
            {...rest}
            render={(props) =>
                isLogin ? <Component {...props} /> : <Redirect to='/' />
            }
        />
    );
}

export default PrivateRoute;
