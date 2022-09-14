import React from "react";
import Products from "./Products";
function Home() {
  return (
    <div className="hero">
      {/* <div className="card text-white bg-dark border-0" height="600px">
        <img
          src="../../assets/pexels-daniel-adesina-833052.jpg"
          className="card-img"
          alt="..."
        />
        <div className="card-img-overlay">
          <div className="container"></div>
          <h5 className="card-title display-3 text-black">
            NEW SEASON'S ARRIVAL
          </h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
      </div> */}
      <Products />
    </div>
  );
}

export default Home;
