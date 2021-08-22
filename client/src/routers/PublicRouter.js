import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRouter = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={() => (!isAuthenticated ? <Component /> : <Redirect to="/" />)}
    />
  );
};

export default PublicRouter;
