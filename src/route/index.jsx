import React from "react";
import Home from "../container/view/Home";
import Page404 from "../container/view/Page404";
import Register from "../components/auth/RegisterForm";
import Login from "../components/auth/LoginForm";
import MainAuth from "../container/layout/MainAuth";
import { Routes, Route } from "react-router-dom";

function Router() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={
          <MainAuth>
            <Home />
          </MainAuth>
        }
      />
      <Route
        path="*"
        element={
          <MainAuth>
            <Page404 />
          </MainAuth>
        }
      />
    </Routes>
  );
}

export default Router;
