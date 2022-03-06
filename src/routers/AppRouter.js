import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { startChecking } from "../actions/auth";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";
import { CalendarScreen } from "../components/calendar/CalendarScreen";
import DoubbleBubble from "../components/ui/DoubleBubble/DoubleBubble";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const dispatch = useDispatch();

  const { checking, uid } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  if ( checking ) {
    return (
      <div>
        {/* Loading screen */}
        <DoubbleBubble speed={5} customText={"Loading"} />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            // !!uid => true
            <PrivateRoute isAuthenticated={!!uid}>
              <CalendarScreen />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute isAuthenticated={!!uid}>
              <LoginScreen />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute isAuthenticated={!!uid}>
              <RegisterScreen />
            </PublicRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
