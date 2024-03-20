import { createSlice } from "@reduxjs/toolkit";

// can store multiple states in a single slice
const initialState = {
    cartItems:[],
    cartBtnLabel: false
}

// slice is a collection of redux reducer logic and actions for a specific feature
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
       // action
       add: (state,action) => {
          state.cartItems.push(action.payload);
       },
       // add an action to modify cartBtn label
       updateCartBtnLabel: (state,action) => {
        state.cartBtnLabel = action.payload;
       }
    }
});

// exporting actions & reducers
export const {add, updateCartBtnLabel} = cartSlice.actions;
export default cartSlice.reducer;