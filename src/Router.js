import React, { useState, createContext } from "react";
// import { render } from "react-dom";
// import AboutPage from "./About";
import {
  BrowserRouter,
  Route,
  Routes,
  redirect,
  Navigate,
} from "react-router-dom";

import HomPejFunc from "./pages/Home";
import AbtPejFunc, { CntPejFunc } from "./pages/About";
import LoginPejFunc from "./pages/Login";
import Dashboard from "./pages/Dashboard";
// import AbtPejFunc from "./pages/About";
// import CntPejFunc from "./pages/Contact";
import User from "./pages/User";

export var ContextHook = createContext();

export default function Router() {
  //localStorage.setItem("abc","XYZ");
  //sessionStorage
  const getUserLogin = localStorage.getItem("login") === "true";
  const [userLogin, setUserLogin] = useState(getUserLogin);

  // console.log(typeof userLogin);
  // if (userLogin === "true") {
  //   setUserLogin(true);
  // } else {
  //   setUserLogin(false);
  // }
  return (
    <ContextHook.Provider value={{ loginAction: setUserLogin }}>
      <Routes>
        <Route path="/" element={<HomPejFunc />} />
        <Route path="/about" element={<AbtPejFunc />} />
        <Route path="/contact" element={<CntPejFunc />} />
        <Route
          path="/login"
          element={<LoginPejFunc loginAction={setUserLogin} />}
        />
        {/* <Route
        path="/user/:id"
        element={userLogin ? <User /> : <Navigate to="/about" />}
      />
      <Route
        path="/user/:name/:id"
        element={userLogin ? <User /> : <Navigate to="/about" />}
      />
      <Route
        path="/dashboard"
        element={userLogin ? <Dashboard /> : <Navigate to="/login" />}
      /> */}

        {userLogin && (
          <>
            <Route
              path="/dashboard"
              element={<Dashboard />}
              loginAction={setUserLogin}
            />
            <Route path="/user/:id" element={<User />} />
            <Route path="/user/:name/:id" element={<User />} />
          </>
        )}

        <Route path="*" element={<h1>Please Login to access Page</h1>} />

        {/* <Route path="*" element={<div>ERROR PAGE</div>} /> */}
        {/* <ProtectedRoute /> */}
      </Routes>
    </ContextHook.Provider>
  );

  function ProtectedRoute() {
    //const [userLogin, ]
    let userLogin = localStorage.getItem("login");

    if (userLogin === "true") {
      userLogin = true;
    } else {
      userLogin = false;
    }

    return (
      <>
        <Route
          path="/user/:id"
          element={userLogin ? <User /> : <Navigate to="/about" />}
        />
        <Route
          path="/user/:name/:id"
          element={userLogin ? <User /> : <Navigate to="/about" />}
        />
        <Route
          path="/dashboard"
          element={userLogin ? <Dashboard /> : <Navigate to="/login" />}
        />
      </>
    );
  }
}
