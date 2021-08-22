import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRouter = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={() => (isAuthenticated ? <Component /> : <Redirect to="/" />)}
    />
  );
};

export default PrivateRouter;
