import {configureStore} from "@reduxjs/toolkit";
import GridSlice from "./slice/GridSlice";

export const store = configureStore({
    reducer:{
        grid: GridSlice,
    }
});