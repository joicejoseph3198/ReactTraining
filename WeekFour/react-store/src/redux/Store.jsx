import {configureStore} from '@reduxjs/toolkit';
import CartSlice from './CartSlice';
import ProductSlice from './ProductSlice';

// global states, bunch of reducers (slices) which modify 
// the state based on actions
const store = configureStore({
    reducer : {
        cart: CartSlice,
        product: ProductSlice,
    }
})

export default store;