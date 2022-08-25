import { BUY_ICECREAM } from "./icecreamType";

const initialState = {
    numOfIcecream: 25
};
const icecreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: 
            return {
              ...state,
              numOfIcecream: state.numOfIcecream - 1,
            };
        default:
            return state
    }
}
export default icecreamReducer;