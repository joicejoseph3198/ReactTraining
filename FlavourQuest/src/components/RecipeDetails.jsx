import { useDispatch, useSelector } from "react-redux";
import { fetchIngredients, fetchInstruction, fetchNutrients, fetchSimilarRecipe, fetchSummary } from "../redux/slice/DetailSlice";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { IoMdTime } from "react-icons/io";
import AccordianContainer from "./AccordianContainer";
import { IoMdHeartEmpty } from "react-icons/io";
import List from "./List";
import findRecipeImg from "../assets/images/FindRecipe.gif";
import { addToFav } from "../redux/slice/FavouriteSlice";
import Loader from "./Loader";

const RecipeDetails = () => {

    // to fetch the id from url
    const {recipeId} = useParams();
    const dispatch = useDispatch();
    // call apis on component load
    useEffect(()=>{
        dispatch(fetchSummary({id: recipeId}));
        dispatch(fetchSimilarRecipe({id: recipeId}));
        dispatch(fetchIngredients({id: recipeId}));
        dispatch(fetchNutrients({id:recipeId}));
        dispatch(fetchInstruction({id:recipeId}));
    },[recipeId,dispatch]);

    const basicDetails = useSelector(state=> state.detail.summary.data);
    const recommendationDetails = useSelector(state => state.detail.similar.data);
    const ingredientDetails = useSelector(state => state.detail.ingredients);
    const nutrientDetails = useSelector(state=> state.detail.nutrients);
    const instructionDetails = useSelector(state=> state.detail.instructions);
    
    if(ingredientDetails.isLoading || nutrientDetails.isLoading || instructionDetails.isLoading){
        return(
            <Loader/>
        )
    }
    
    const nutrientList = nutrientDetails.data?.nutrients.map(nutrient => {
        const {name, amount, unit} = nutrient;
        return `${name}: ${amount} ${unit}`
    })??[];

    const ingredientList = ingredientDetails.data?.ingredients.map(ingredient => {
        const { name } = ingredient;
        const { unit, value } = ingredient.amount.metric; 
        return `${name}: ${value} ${unit}`;
    })??[];
    const instructionList = instructionDetails.data?.flatMap(instructionObj => 
        instructionObj?.steps.map(instruction => {
            const {number, step} = instruction;
            return `${number}. ${step}`;
        })
    )?? [];

    return(
        <div className="h-auto pb-10">
            <div>
                <p className="w-2/4 uppercase text-md md:text-6xl text-left p-5 font-bold">
                    {basicDetails?.title}
                </p>
                <p className="text-left text-md md:text-3xl p-5 hover:font-bold">
                    <button onClick={() => window.open(`${basicDetails?.spoonacularSourceUrl}`, '_blank')}>Learn More</button>
                </p>
            </div>
            <div className="w-full flex flex-col lg:flex-row justify-center items-center text-xl xl:text-4xl lg:justify-evenly">
                <div>
                    <ul >
                        <li className="flex items-center justify-center py-5"> <IoMdTime /> : {basicDetails?.readyInMinutes} min </li>
                        <li className={basicDetails?.vegetarian === true? 'text-emerald-600 capitalize font-bold': 'text-transparent/25 capitalize line-through'}> vegetarian</li>
                        <li className={basicDetails?.vegan === true? 'text-emerald-600 capitalize font-bold': 'text-transparent/25 capitalize line-through'}> vegan</li>
                        <li className={basicDetails?.ketogenic === true? 'text-emerald-600 capitalize font-bold': 'text-transparent/25 capitalize line-through'}> ketogenic</li>
                        <li className={basicDetails?.dairyFree === true? 'text-emerald-600 capitalize font-bold': 'text-transparent/25 capitalize line-through'}> dairyFree</li>
                        <li className={basicDetails?.sustainable === true? 'text-emerald-600 capitalize font-bold': 'text-transparent/25 capitalize line-through'}>sustainable</li>
                        <li>
                        <div className="flex gap-5 p-5">
                            <button title="[Work in Progress]" className="flex flex-row items-center justify-center px-4 rounded-full text-sm bg-black text-white border-transparent py-1.5 h-[38px]">
                            Add to Meal Plan
                            </button>
                            <button title="Add to Favourite" className="text-2xl flex items-center justify-center px-4 hover:bg-green-500" onClick={()=>dispatch(addToFav({id: recipeId,title: basicDetails?.title}))}><IoMdHeartEmpty /></button>
                            </div>
                        </li>                        
                    </ul>
                </div>
                <div>
                    <img className="object-contain rounded-t-3xl border-black border-2" src={basicDetails?.image} alt="Insert picture here."></img>
                </div>
            </div> 
            <div className="flex justify-center items-center m-10">
                    <AccordianContainer instructionList={instructionList} ingredientList={ingredientList} nutrientList={nutrientList}/>
            </div>
            {recommendationDetails?.length > 0 && (
                <div className="pt-10 border-black">
                    <div className="flex flex-col md:flex-row items-center justify-center p-5">
                        <p className="w-3/4 lg:w-2/4 text-sm md:text-4xl text-left">
                            Explore our <span className="text-emerald-600"> recommendations </span>curated just for you. From savory main courses to decadent desserts, discover new flavors and inspiration to elevate your cooking experience.
                        </p>
                        <img className="w-2/4 lg:w-1/4 h-auto" src={findRecipeImg}/>
                    </div>
                    <List resultList={recommendationDetails} listTitle={"Recommendations"}/>
                </div>
            )}
        </div>
    )
};

export default RecipeDetails;