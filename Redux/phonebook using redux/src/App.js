import React from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <h2>welcome to contact app</h2>
      <Navbar />
      </div>
  );
}

export default App;
