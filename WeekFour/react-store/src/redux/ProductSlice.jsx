import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    productList : [],
    initialised: false,
}

// Generates pending, fulfiled and rejected action types
export const fetchProducts = createAsyncThunk('product/fetchProducts',async ()=>{
    const response = await fetch("https://fakestoreapi.com/products");
    console.log(response);
    return await response.json();
    });


const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        // standard reducer logic, with auto-generated action types per reducer
        // display: (state,action) => {
        //     state.productList.push(...action.payload);
        // }
    },
    extraReducers:(builder) => {
        // extra reducers is actually like reducers with enhancements, but it's been built to 
        // handle more options, esecially other actions (like the ones generated in other slices
        // or actions made by createAction or createAsyncThunk).
        //Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchProducts.fulfilled, (state,action) => {
            state.productList.push(...action.payload);
            state.initialised = true;
        })
    }

})

export default productSlice.reducer;