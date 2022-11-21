import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Login } from "./pages/login";
import { Signup } from "./pages/signup";
import { Profile } from "./pages/profile";
import { Tracker } from "./pages/tracker";
import { Routines } from "./pages/routines";
import { Free } from "./pages/free";
import { Dayroutine } from "./pages/dayroutine";
import { Default } from "./pages/default";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Historytracker } from "./pages/historytracker";
import injectContext from "./store/appContext";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";
  const logeado = false;

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <>
              <Route element={<Login />} path="/login" />
              <Route element={<Signup />} path="/signup" />
            </>
            <>
              <Route element={<Profile />} path="/profile" />
              <Route element={<Tracker />} path="/tracker" />
              <Route element={<Routines />} path="/routines" />
            </>
            <Route element={<Routines />} path="/routines" />
            <Route element={<Free />} path="/free" />
            <Route element={<Default />} path="/default" />
            <Route element={<Dayroutine />} path="/dayroutine" />
            <Route element={<Historytracker />} path="/historytracker" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<Navigate to="/" />} path="*" />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
