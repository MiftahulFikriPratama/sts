import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoutes = (props) => {
  const { isLoggin } = props;

  return isLoggin ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AuthRoutes;
