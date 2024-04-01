import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchRecipe } from "../redux/slice/GridSlice";
import DisplayCard from "./DisplayCard";
import loadingImg from "../assets/images/LoadingImg.gif"
import errorImg from "../assets/images/ErrorImg.png"

const MasonryGrid = () =>{
    
    const dispatch = useDispatch();
    
    // calls the random recipe api on start-up
    useEffect(()=>{
        dispatch(fetchRecipe());
    },[]);

    const recipes = useSelector(state=>state.grid);

    if(recipes.isError){
        return(
            <div>
            <img className="w-full md:w-2/4 object-center object-contain" src= {errorImg} alt="Error..." />
        </div>
        )
    }

    if(recipes.data === null || recipes.isLoading){
        return(
            <div className="mt-10 text-bold text-xs  bg-gray-50">
                <div className="flex flex-col items-center justify-center sm:flex-row">
                    <p className="pt-10 w-2/4 md:w-1/4">Sit tight! We are preparing an amazing experience just for you. Our servers are working hard to fetch the latest content. In the meantime, grab a cup of coffee and relax. We'll be with you shortly.</p>
                    <img className="w-1/4 h-auto object-contain" src= {loadingImg} alt="Loading.." />
                </div>
            </div>
            
        )
    }

    return(
        <div className="p-1">
            <div>Recipes You Might Like</div>
            <div className="columns-1 gap-1 md:columns-2 lg:columns-3 [&>card:not(:first-child)]:mt-10">
                {recipes.data.map(recipeObj=> 
                    <DisplayCard className="card" key={recipeObj.id} recipeObj={recipeObj}/> )}
            </div>
        </div>
    )
}

export default MasonryGrid;