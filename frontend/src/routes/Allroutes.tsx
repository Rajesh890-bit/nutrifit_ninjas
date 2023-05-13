import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Exercise from "../pages/Exercise";
import LoginPage from "../components/Sigup";
import Signup from "../components/LoginPage";
import { AdminPrivateRoute } from "./private.routes";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/dashboard"
          element={
            <AdminPrivateRoute>
              {" "}
              <Dashboard />
            </AdminPrivateRoute>
          }
        ></Route>
        <Route path="/exercise" element={<Exercise />}></Route>
        <Route path="/signup" element={<LoginPage />}></Route>
        <Route path="/login" element={<Signup />}></Route>
      </Routes>
    </div>
  );
};

export default Allroutes;
