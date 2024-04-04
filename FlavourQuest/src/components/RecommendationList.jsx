import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchRecipe } from "../redux/slice/RecommendationSlice";
import errorImg from "../assets/images/ErrorImg.png"
import Loader from "./Loader";
import List from "./List";

const RecommendationList = () =>{
    
    const dispatch = useDispatch();
    
    // calls the random recipe api on start-up
    useEffect(()=>{
        dispatch(fetchRecipe());
    },[]);

    const recipes = useSelector(state=>state.recommendation);

    if(recipes.isError){
        return(
            <div>
            <img className="w-full md:w-2/4 object-center object-contain" src= {errorImg} alt="Error..." />
        </div>
        )
    }

    if(recipes.data === null || recipes.isLoading){
        return(
            <Loader/>
        )
    }

    return(
        <List resultList={recipes.data} listTitle={"Recipes You May Like"}/>
    )
}

export default RecommendationList;