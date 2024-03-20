import { createSlice } from "@reduxjs/toolkit";

// can store multiple states in a single slice
const initialState = {
    cartItems:[]
}

// slice is a collection of redux reducer logic and actions for a specific feature
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
       // action
       add: (state,action) => {
         state.cartItems.push(action.payload);
       } 
    }

});

// exporting actions & reducers
export const {add} = cartSlice.actions;
export default cartSlice.reducer;