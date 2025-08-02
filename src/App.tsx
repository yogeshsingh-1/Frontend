// import React from 'react'
import { Routes, Route} from "react-router-dom";
import Signin from "./pages/Signin";
import Blog from "./pages/Blog";
import Signup from "./pages/Signup";
import Blogs from "./pages/Blogs";
import Publish from "./pages/Publish";
import ProtectedRoute from "./pages/ProtectedRoutes";
import ProtectedSigninRoute from "./pages/ProtectSigninRoutes";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route
          path="/signup"
          element={
            <ProtectedSigninRoute>
              <Signup />
            </ProtectedSigninRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <ProtectedSigninRoute>
              <Signin />
            </ProtectedSigninRoute>
          }
        />

        <Route
          path="/user/publish"
          element={
            <ProtectedRoute>
              <Publish />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/blog/:id"
          element={
            <ProtectedRoute>
              <Blog />
            </ProtectedRoute>
          }
        />

        <Route
          path="/user/blogs"
          element={
            <ProtectedRoute>
              <Blogs />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
