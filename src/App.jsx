import React, { useEffect } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import {
  APPLICATION_FORM,
  DASHBOARD,
  LOGIN,
  OTP_PATH,
  ROOT,
} from "./utils/constants/routes";
import Login from "./components/auth/login/Login";
import OTP from "./components/auth/otp/OTP";
import Dashboard from "./components/dashboard/Dashboard";
import ApplicationForm from "./components/dashboard/applicationForm/ApplicationForm";
import Navbar from "./components/common/header/Navbar";
import { useSelector } from "react-redux";
import ProtectedRoute from "./components/auth/protectedRoute/ProtectedRoute";
import ToastComponent from "./components/common/toast/ToastComponent";

const App = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <div className="w-full">
      {isLoggedIn && <Navbar />}
      <Outlet />
      <ToastComponent />
    </div>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: ROOT,
    element: <App />,
    children: [
      { path: LOGIN, element: <Login /> },
      { path: OTP_PATH, element: <OTP /> },
      { path: DASHBOARD, element: <ProtectedRoute><Dashboard /></ProtectedRoute> },
      { path: APPLICATION_FORM, element:<ProtectedRoute> <ApplicationForm /></ProtectedRoute> },
    ],
  },
]);

export default App;
