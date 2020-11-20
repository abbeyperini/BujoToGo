import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, roles, ...rest }) {
    return (
        <Route {...rest} render={props => {
            if (!localStorage.getItem('user')) {
                // not logged iini so redirect to login page with the return url
                return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            }

            // logged in so return compenent
            return <Component {...props} />
        }} />
    );
}

export default PrivateRoute;