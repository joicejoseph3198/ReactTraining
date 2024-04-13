import {createSlice } from "@reduxjs/toolkit";

// apiKey from .env file
const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY


const favouriteSlice = createSlice({
    name: "favourite",
    initialState: {
        data: [],
        buttonStatus: false
    },
    reducers:{
        addToFav:(state,action) => {
            console.log("AddtoFav called")
            if(state.data.indexOf(action.payload == -1)){
                console.log("adding to list",action.payload);
                state.data.push(action.payload);
            }
        },
        removeFromFav: (state,action) => {
            state.data = [...state.data.filter(recipeId => recipeId !== action.payload.id)];
        } 
    },
});
export const {addToFav, removeFromFav} = favouriteSlice.actions;
export default favouriteSlice.reducer;