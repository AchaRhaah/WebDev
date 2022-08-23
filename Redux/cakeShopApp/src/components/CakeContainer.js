import React from "react";
import { buyCake } from '../redux/index'
import { connect } from 'react-redux'

function CakeContainer() {
  return (
    <div>
      <h2>Number of cakes </h2>
      <button>Buy cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CakeContainer);
