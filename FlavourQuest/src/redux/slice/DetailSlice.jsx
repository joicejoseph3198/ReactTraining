import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// apiKey from .env file
const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY


export const fetchSummary = createAsyncThunk("detail/fetchSummary", async (id) => {
    const response = await fetch(`https://api.spoonacular.com/recipes/${id}/summary?apiKey=${apiKey}`);
    const data =  await response.json();
    return data;
});

export const fetchInstruction = createAsyncThunk("detail/fetchInstruction", async (id) => {
    const response = await fetch(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${apiKey}`);
    const data =  await response.json();
    return data;
});

export const fetchIngredients = createAsyncThunk("detail/fetchIngredients", async (id) => {
    const response = await fetch(`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${apiKey}`);
    const data =  await response.json();
    return data;
});

export const fetchNutrients = createAsyncThunk("detail/fetchNutrients", async (id) => {
    const response = await fetch(`https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=${apiKey}`);
    const data =  await response.json();
    return data;
});

export const fetchSimilarRecipe = createAsyncThunk("detail/fetchSimilarRecipe", async (id) => {
    const response = await fetch(`https://api.spoonacular.com/recipes/${id}/similar?apiKey=${apiKey}`);
    const data =  await response.json();
    return data;
});

const detailSlice = createSlice({
    name: "detail",
    initialState: {
        isLoading: false,
        isError: false,
        data: null
    },
    reducers:{
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSummary.rejected, (state)=>{
           state.isError = true;
        });
        builder.addCase(fetchSummary.pending, (state)=>{
            state.isLoading = true;
        });
        builder.addCase(fetchSummary.fulfilled, (state,action)=>{
            state.isError = false;
            state.isLoading = false;
            state.data = [...action.payload];
        });
    }
});
export default detailSlice.reducer;