import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItem: [],
    amount: 0,
    total: 0,
    islLoading: true
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
})

console.log(cartSlice);

