import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// apiKey from .env file
const apiKey =import.meta.env.VITE_SPOONACULAR_API_KEY
// action
export const fetchRecipe = createAsyncThunk("grid/fetchRecipe", async ()=> {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=20`);
    const data =  await response.json();
    console.log(data);
    return data.recipes;
});

const gridSlice = createSlice({
    name: "grid",
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
            console.log(action.payload)
            state.data = [...action.payload];
        });
    }
});
export default gridSlice.reducer;