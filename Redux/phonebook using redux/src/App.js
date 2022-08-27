import React from "react";
import Home from "./components/Home";
import ComponentA from "./components/ComponentA";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import {Route } from "react-router"
import "./App.css";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      {/* We need 2 routes 1) /add 2) /edit/:id */}
      <ToastContainer />
      <Navbar />
        <Routes>
          <Route exact path="/" element={< ComponentA />} />
            {" "}
        </Routes>
    </div>
  );
}

export default App;
