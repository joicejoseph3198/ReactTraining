import {createSlice } from "@reduxjs/toolkit";


const favouriteSlice = createSlice({
    name: "favourite",
    initialState: {
        data: [],
    },
    reducers:{
        addToFav:(state,action) => {
            const foundIndex = state.data.findIndex(item => item.id === action.payload.id && item.title === action.payload.title);
            if(foundIndex== -1){
                state.data.push(action.payload);
            }
        },
        removeFromFav: (state,action) => {
            state.data = [...state.data.filter(item => item.id !== action.payload)];
        } 
    },
});
export const {addToFav, removeFromFav} = favouriteSlice.actions;
export default favouriteSlice.reducer;