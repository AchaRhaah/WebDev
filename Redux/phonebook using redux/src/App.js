import React from "react";
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
// import store from "./redux/store";
// import {Route } from "react-router"
import "./App.css";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        {/* We need 2 routes 1) /add 2) /edit/:id */}
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/add" element={<AddContact />} />
          <Route path="/edit/:id" element={<EditContact />} />
        </Routes>
      </div>
    // </Provider>
  );
}

export default App;
