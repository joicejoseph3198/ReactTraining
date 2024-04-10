import { useDispatch, useSelector } from "react-redux";
import { fetchIngredients, fetchSimilarRecipe, fetchSummary } from "../redux/slice/DetailSlice";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { IoMdTime } from "react-icons/io";
import AccordianContainer from "./AccordianContainer";
import { IoMdHeartEmpty } from "react-icons/io";
import List from "./List";
import findRecipeImg from "../assets/images/FindRecipe.gif";

const RecipeDetails = () => {

    // to fetch the id from url
    const {recipeId} = useParams();
    const dispatch = useDispatch();
    // call apis on component load
    useEffect(()=>{
        dispatch(fetchSummary({id: recipeId}));
        dispatch(fetchSimilarRecipe({id: recipeId}));
        dispatch(fetchIngredients({id: recipeId}));
    },[]);

    const basicDetails = useSelector(state=> state.detail.summary.data);
    const recommendationDetails = useSelector(state => state.detail.similar.data);
    
    // const ingredientDetails = useSelector(state => state.detail.ingredients.data);

    // const ingredientList = ingredientDetails?.ingredients.map(ingredient => {
    //         const { name } = ingredient;
    //         const { unit, value } = ingredient.amount.metric; 
    //         return `${name}: ${value} ${unit}`;
    //     }
    // );
    
    // const nutrientDetails = useSelector(state=> state.detail.nutrients.data);
    // const nutrientList = nutrientDetails?.nutrients.map(nutrient => {
    //     const {name, amount, unit} = nutrient;
    //     return `${name}: ${amount} ${unit}`
    // })



    console.log(ingredientList);
    console.log(nutrientList);


    return(
        <div className="h-auto pb-10">
            <div>
                <p className="uppercase text-6xl text-left p-5 font-bold">
                    {basicDetails?.title}
                </p>
                <p className="text-right text-3xl p-5 font-bold underline">
                    Learn More
                </p>
            </div>
            <div className="flex flex-col xl:flex-row justify-center items-center text-xl xl:text-4xl m-10 lg:justify-evenly m-5">
                <div>
                    <ul >
                        <li className="flex items-center justify-center py-5"> <IoMdTime /> : {basicDetails?.readyInMinutes} </li>
                        <li className={basicDetails?.vegetarian === true? 'text-emerald-600 capitalize font-bold': 'text-transparent/25 capitalize line-through'}> vegetarian</li>
                        <li className={basicDetails?.vegan === true? 'text-emerald-600 capitalize font-bold': 'text-transparent/25 capitalize line-through'}> vegan</li>
                        <li className={basicDetails?.ketogenic === true? 'text-emerald-600 capitalize font-bold': 'text-transparent/25 capitalize line-through'}> ketogenic</li>
                        <li className={basicDetails?.dairyFree === true? 'text-emerald-600 capitalize font-bold': 'text-transparent/25 capitalize line-through'}> dairyFree</li>
                        <li className={basicDetails?.sustainable === true? 'text-emerald-600 capitalize font-bold': 'text-transparent/25 capitalize line-through'}>sustainable</li>
                        <li>
                        <div className="flex gap-5 p-5">
                            <button className="flex flex-row items-center justify-center px-4 rounded-full text-sm bg-black text-white border-transparent py-1.5 h-[38px] ml-4">
                            Add to Meal Plan
                            </button>
                            <button className="text-2xl flex items-center justify-center px-4"><IoMdHeartEmpty /></button>
                            </div>
                        </li>                        
                    </ul>
                </div>
                <div>
                    <img className="object-contain rounded-t-3xl border-black border-2 " src={basicDetails?.image} alt="Insert picture here."></img>
                </div>
                <div className="m-10">
                    <AccordianContainer/>
                </div>
            </div> 
            <div className=" pt-10 border-black border-t-2">
                <div className="flex flex-col md:flex-row items-center justify-center w-full">
                    <img className="w-2/4 md:w-1/4 rounded-3xl" src={findRecipeImg}/>
                    <p className="w-full md:w-2/4 text-xl xl:text-4xl text-left px-24 ">
                    Explore our <span className="text-emerald-600"> recommendations </span>curated just for you. From savory main courses to decadent desserts, discover new flavors and inspiration to elevate your cooking experience.
                    </p>
                </div>
                {recommendationDetails?.length > 0 && <List resultList={recommendationDetails} listTitle={"Recommendations"}/> }
                
            </div>
        </div>
    )
};

export default RecipeDetails;