import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-right px-5">
          <Link to="/add" className="btn btn-outline-dark">
            Add contact
          </Link>
        </div>
        <div className="col-md-6 mx-auto"></div>
      </div>
      <h1>Welcome to react Redux contact app</h1>
    </div>
  );
}

export default Home;
