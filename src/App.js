import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router, Routes, and Route
import Login from "./components/Login";
import Home from "./pages/Home";
import PasswordReset from "./components/PasswordReset";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route path="/layout" element={<Layout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


