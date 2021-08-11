import React from 'react';
const PublicRoute = (route, authToken) => {
    return (
        authToken && route.isRestricted ? (
  <Redirect to="/home" />
 ) : (
  <Route path={route.path} exact={route.exact} component={route.component} />
 );
    );
}

export default PublicRoute;