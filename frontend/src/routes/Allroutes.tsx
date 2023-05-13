import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../components/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Exercise from "../pages/Exercise";
import Diet from "../pages/Diet";
import Signup from "../components/Sigup";
const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/exercise" element={<Exercise />}></Route>
        <Route path="/diet" element={<Diet />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default Allroutes;
