import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = (props) => {
  const { isLoggin } = props;

  return isLoggin ? <Navigate to='/Landingpage' replace /> : <Outlet />;
};

export default PublicRoutes;
