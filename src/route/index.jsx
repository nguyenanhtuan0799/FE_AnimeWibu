import React from "react";
import Home from "../container/view/Home";
import Page404 from "../container/view/Page404";
import Register from "../components/auth/RegisterForm";
import Login from "../components/auth/LoginForm";
import MainAuth from "../container/layout/MainAuth";
import MovieDetail from "../container/view/movie/MovieDetail";
import MovieList from "../container/view/movie/MovieList";
import { Routes, Route } from "react-router-dom";

function Router() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/">
        <Route
          index
          element={
            <MainAuth>
              <Home />
            </MainAuth>
          }
        />
        <Route path="/movie">
          <Route
            path="/movie/:type"
            element={
              <MainAuth>
                <MovieList />
              </MainAuth>
            }
          />
        </Route>

        <Route
          path="*"
          element={
            <MainAuth>
              <Page404 />
            </MainAuth>
          }
        />
      </Route>
    </Routes>
  );
}

export default Router;
