import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// apiKey from .env file
const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY

// action
export const fetchRecipe = createAsyncThunk("recommendation/fetchRecipe", async ()=> {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=10`);
    const data =  await response.json();
    return data.recipes;
});

const recommendationSlice = createSlice({
    name: "recommendation",
    initialState: {
        isLoading: false,
        isError: false,
        data: null
    },
    reducers:{
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRecipe.rejected, (state)=>{
           state.isError = true;
        });
        builder.addCase(fetchRecipe.pending, (state)=>{
            state.isLoading = true;
        });
        builder.addCase(fetchRecipe.fulfilled, (state,action)=>{
            console.log(state);
            state.isLoading = false;
            state.data = [...action.payload];
        });
    }
});
export default recommendationSlice.reducer;