import React, { useState } from "react";
import { useSelector } from "react-redux";
// import handleCart from "../redux/reducers/handleCart";

export default function Cart() {
  const state = useSelector((state) => state.handleCart);
  };

  return (
    <>
          {state.map((product) => {
          const [qty, setQty] = useState(product.qty)
        return (
          <div className="d-flex mx-auto">
            <div className="col-md-5">
              <img
                src={product.image}
                alt={product.title}
                height="300px"
                width="340px"
              />
            </div>
            <div className="col-md-6">
              <h6 className="display-5 fw-bold">{product.title}</h6>
              <h3 className="display-6 ">
                {product.qty} &times; $ {product.price} = {product.price}
              </h3>
              {/* <button
                className="btn btn-outline-dark me-4"
              >
                <i className="fa fa-minus"></i>
              </button> */}
              {/* <button
                className="btn btn-outline-dark"
              >
                <i className="fa fa-plus"></i>
              </button> */}
            </div>
          </div>
        );
      })}
      <br />
      <br />
    </>
  );
}
