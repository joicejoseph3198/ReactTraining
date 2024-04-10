import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// apiKey from .env file
const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY


export const fetchSummary = createAsyncThunk("detail/fetchSummary", async ({id}) => {
    const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`);
    const data =  await response.json();
    return data;
});

export const fetchInstruction = createAsyncThunk("detail/fetchInstruction", async ({id}) => {
    const response = await fetch(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${apiKey}`);
    const data =  await response.json();
    return data;
});

export const fetchIngredients = createAsyncThunk("detail/fetchIngredients", async ({id}) => {
    const response = await fetch(`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${apiKey}`);
    const data =  await response.json();
    return data;
});

export const fetchNutrients = createAsyncThunk("detail/fetchNutrients", async ({id}) => {
    const response = await fetch(`https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=${apiKey}`);
    const data =  await response.json();
    return data;
});

export const fetchSimilarRecipe = createAsyncThunk("detail/fetchSimilarRecipe", async ({id}) => {
    const response = await fetch(`https://api.spoonacular.com/recipes/${id}/similar?apiKey=${apiKey}`);
    const data =  await response.json();
    return data;
});

const detailSlice = createSlice({
    name: "detail",
    initialState: {
        summary: {
            isLoading: false,
            isError: false,
            data: null
        },
        similar: {
            isLoading: false,
            isError: false,
            data: null
        },
        ingredients:{
            isLoading: false,
            isError: false,
            data: null
        }, 
        nutrients: {
            isLoading: false,
            isError: false,
            data: null
        },
        instructions: {
            isLoading: false,
            isError: false,
            data: null
        }
    },
    reducers:{
    },
    extraReducers: (builder) => {
        {/* SUMMARY API */}
        builder.addCase(fetchSummary.rejected, (state)=>{
           state.summary.isError = true;
        });
        builder.addCase(fetchSummary.pending, (state)=>{
            state.summary.isLoading = true;
        });
        builder.addCase(fetchSummary.fulfilled, (state,action)=>{
            state.summary.isError = false;
            state.summary.isLoading = false;
            state.summary.data = action.payload;
        });
        {/* SIMILAR RECIPE API */}
        builder.addCase(fetchSimilarRecipe.rejected, (state)=>{
            state.similar.isError = true;
         });
         builder.addCase(fetchSimilarRecipe.pending, (state)=>{
             state.similar.isLoading = true;
         });
         builder.addCase(fetchSimilarRecipe.fulfilled, (state,action)=>{
             state.similar.isError = false;
             state.similar.isLoading = false;
             state.similar.data = [...action.payload];
         });
          {/* INGREDIENTS API */}
        builder.addCase(fetchIngredients.rejected, (state)=>{
            state.ingredients.isError = true;
         });
         builder.addCase(fetchIngredients.pending, (state)=>{
             state.ingredients.isLoading = true;
         });
         builder.addCase(fetchIngredients.fulfilled, (state,action)=>{
             state.ingredients.isError = false;
             state.ingredients.isLoading = false;
             state.ingredients.data = action.payload;
         });
          {/* NUTRIENTS API */}
        builder.addCase(fetchNutrients.rejected, (state)=>{
            state.nutrients.isError = true;
         });
         builder.addCase(fetchNutrients.pending, (state)=>{
             state.nutrients.isLoading = true;
         });
         builder.addCase(fetchNutrients.fulfilled, (state,action)=>{
             state.nutrients.isError = false;
             state.nutrients.isLoading = false;
             state.nutrients.data = action.payload;
         });
          {/* INSTRUCTIONS API */}
        builder.addCase(fetchInstruction.rejected, (state)=>{
            state.instructions.isError = true;
         });
         builder.addCase(fetchInstruction.pending, (state)=>{
             state.instructions.isLoading = true;
         });
         builder.addCase(fetchInstruction.fulfilled, (state,action)=>{
             state.instructions.isError = false;
             state.instructions.isLoading = false;
             state.instructions.data = [...action.payload];
         });
    }
});
export default detailSlice.reducer;