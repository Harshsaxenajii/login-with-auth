import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//components
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import { UserAuthContextProvider } from "./context/UserAuthContext";

//protected route
import ProtectedRoute from "./Components/ProtectedRoute"

export default function App() {
  return (
    <UserAuthContextProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route
            exact path="/Home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route exact path="/Signup" element={<Signup />} />
        </Routes>
      </Router>
    </UserAuthContextProvider>
  );
}
