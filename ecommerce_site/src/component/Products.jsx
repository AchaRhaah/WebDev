import React, { useState, useEffect } from "react";

export default function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log("jhsldkgs" + filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProduct();
  });

  const Loading = () => {
    return <>Loading...</>;
  };
  const ShowProduct = () => {
    return (
      <div className="buttons">
        <buttons className="btn btn-outline-dark">All</buttons>
        <buttons className="btn btn-outline-dark">Men's Clothing</buttons>
      </div>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
}
