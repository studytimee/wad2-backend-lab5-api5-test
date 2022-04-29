import React, { useContext} from "react";
import { Route, Redirect } from "react-router-dom";
import {AuthContext} from './authContext'

const PrivateRoute = props => {
  const context = useContext(AuthContext)
  // Destructure props from <privateRoute> 
  const { component: Component, ...rest } = props;
  console.log(`inside privateRoute function check is authenticated? ${context.isAuthenticated}`);
  return context.isAuthenticated === true ? (
    <Route {...rest} render={props => <Component {...props} />} />
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: { from: props.location }
      }}
    />
  );
};

export default PrivateRoute;