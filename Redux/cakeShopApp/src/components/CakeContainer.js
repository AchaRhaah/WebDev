import React from "react";
import { connect } from 'react-redux'
import { buyCake } from "../redux/cake/cakeActions";
import (buyCake)
function CakeContainer(props) {
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy cake</button>
    </div>
  );
}

const mapStateToProps = state => {
    return {
        numberOfCakes: state.numOfCakes
    }
}

const mapDispatchToProp = dispatch => {
    return {

    }
}
export default CakeContainer;
