import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = (props) => {
  const { isLoggin } = props;

  return isLoggin ? <Navigate to='/Home' replace /> : <Outlet />;
};

export default PublicRoutes;
