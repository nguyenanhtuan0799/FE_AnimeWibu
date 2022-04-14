import React from "react";
import Home from "../container/view/Home";
import Page404 from "../container/view/Page404";
import Register from "../components/auth/RegisterForm";
import Login from "../components/auth/LoginForm";
import MainAuth from "../container/layout/MainAuth";
import MovieDetail from "../container/view/movie/MovieDetail";
import MovieList from "../container/view/movie/MovieList";
import Watch from "../container/view/watch/Watch";
import { Routes, Route } from "react-router-dom";

function Router() {
  return (
    <MainAuth>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/">
          <Route index element={<Home />} />

          <Route path="/movie">
            <Route path="/movie/:slug" element={<MovieDetail />} />
            <Route
              path="/movie/:slugname/:slug/watch/:id"
              element={<Watch />}
            />
          </Route>

          <Route path="/type">
            <Route path="/type/:type" element={<MovieList />} />
          </Route>

          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </MainAuth>
  );
}

export default Router;
