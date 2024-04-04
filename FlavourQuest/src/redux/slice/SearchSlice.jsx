import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// apiKey from .env file
const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY

// action
export const filterRecipe = createAsyncThunk("search/filterRecipe", async ({searchTerm, offset = 0}) => {
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchTerm}&offset=${offset}&number=10`);
    const data =  await response.json();
    return data;
});

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchText: '',
        currentSearchTerm: '',
        searchResult : [],
        isLoading: false,
        isError: false,
        totalPages : 1,
        page: 1,
        offset: 0,
    },
    reducers:{
        updateSearchText: (state,action) => {
            state.searchText = action.payload;
        },
        updateCurrentSearchTerm: (state,action) => {
            state.currentSearchTerm = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(filterRecipe.rejected, (state)=>{
           state.isError = true;
        });
        builder.addCase(filterRecipe.pending, (state)=>{
            state.isLoading = true;
        });
        builder.addCase(filterRecipe.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.offset = action.payload.offset;
            state.searchResult = [...action.payload.results];
            state.totalPages = Math.ceil(action.payload.totalResults/10);
            state.page = Math.floor(action.payload.offset/10) + 1;
        })
    }
});

export const {updateSearchText, updateCurrentSearchTerm} = searchSlice.actions;
export default searchSlice.reducer;