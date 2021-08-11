import React from 'react';
import { Route,Redirect } from 'react-router-dom';

const PrivateRoute = (route, authToken) => {
    return (
        !authToken ? (
  <Redirect to="/login" />
 ) : (
  <Route path={route.path} exact={route.exact} component={route.component} />
 );
    );
}

export default PrivateRoute;