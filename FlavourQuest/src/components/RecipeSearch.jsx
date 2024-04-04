import { useSelector } from "react-redux";
import foodSearch from "../assets/images/FoodSearch.gif"
import RecipeList from "./RecipeList";
import SearchBar from "./SearchBar";

const RecipeSearch = () =>{
    return(
        <>
            <div className="flex flex-col items-center justify-center">
                <div className="p-5 flex flex-col md:flex-row items-center justify-center mt-10">
                    <p className="w-3/4 lg:w-2/4 text-sm md:text-4xl text-left">
                    Ready to embark on a culinary journey? Dive into our recipe search page and <span className="text-emerald-600"> discover a world of flavors </span>
                    waiting to be explored. Whether you are cooking for one or feeding a crowd, we are here to inspire your next culinary masterpiece.
                    </p>
                    <img className="w-2/4 lg:w-1/4 h-auto" src={foodSearch} alt="ThinkingOfFood.jpg"/>
                </div>
                <div className="w-3/4">
                    <SearchBar/> 
                </div>
            </div>
            <div className="pt-10">
                <RecipeList />
            </div>
       </>
    )
}
export default RecipeSearch;