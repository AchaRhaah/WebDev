const cart = [];
const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
      case ADDITEM:
        //   checking if the product already exisit
          const exist = state.find((x) => x.id === product.id);
          if (exist) {
              return state.map((x)=>x.id === product.id? )
          }
      break;
    default:
      break;
  }
};
export default handleCart;
// 39:21