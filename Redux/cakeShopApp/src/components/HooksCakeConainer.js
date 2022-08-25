import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux/index'
function HooksCakeConainer() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
    return (
      <div>
          <h2>number of Cakes-{ numOfCakes }</h2>
        <button onClick={() => dispatch(buyCake())}>buy cake</button>
      </div>
  )
}

export default HooksCakeConainer
// useSelector hook is a close equivalence to the mapPropToState function
// useDispatch hook is a close alternative to mapDispatchToProps function