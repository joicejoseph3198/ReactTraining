import {configureStore} from "@reduxjs/toolkit";
import RecommendationSlice from "./slice/RecommendationSlice";
import SearchSlice from "./slice/SearchSlice";
import DetailSlice from "./slice/DetailSlice";

export const store = configureStore({
    reducer:{
        recommendation: RecommendationSlice,
        search: SearchSlice, 
        detail: DetailSlice
    }
});