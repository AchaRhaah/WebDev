import React from "react";
import { buyIcecream } from "../redux/index";
import { connect } from "react-redux";

function IceCreamContainer(props) {
  return (
    <div>
      <h2>Number of ice cream - { props.numOfIcecream}</h2>
      <button onClick={props.buyIcecream}>Buy ice cream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfIcecream: state.icecream.numOfIcecream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIcecream: () => dispatch(buyIcecream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
