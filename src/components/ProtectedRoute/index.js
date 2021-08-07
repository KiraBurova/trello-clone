import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { ROUTES } from '../../constants';

const ProtectedRoute = ({ user, children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children;
        }

        if (!user) {
          return (
            <Redirect
              to={{
                pathname: ROUTES.SIGNIN,
                state: { from: location },
              }}
            />
          );
        }

        return null;
      }}
    />
  );
};

export default ProtectedRoute;
