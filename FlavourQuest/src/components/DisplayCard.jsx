
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

{/* Currently NOT IN USE*/}
const DisplayCard = ({recipeObj}) => {

    const [trimmedTitle, setTrimmedTitle] = useState('');

    useEffect(() => {
        const trimWord = str => str[0].toLowerCase().startsWith('the') ? str.substring(3) : str;
        setTrimmedTitle(trimWord(recipeObj.title));
    }, [recipeObj.title]);
    
    return(
        <div className="h-auto max-w-screen-xl mx-auto p-1 ">
        <div className="rounded overflow-hidden flex flex-col max-w-xl mx-auto">
            <img className="w-full" src={recipeObj.image} alt="Recipe.jpg"/>
            <div className="relative -mt-16 px-5 pt-5 pb-5 bg-white m-5">
                <a href="#"
                    className="font-semibold text-xl md:text-sm lg:text-md xl:text-xl inline-block hover:text-emerald-600 transition duration-500 ease-in-out inline-block mb-2">The
                    {trimmedTitle}
                </a>
                <p className="mt-5 text-gray-600 text-xs">
                    By : 
                    <a href={recipeObj.spoonacularSourceUrl} className="text-xs hover:text-emerald-600 transition duration-500 ease-in-out">
                         {recipeObj.sourceName}
                    </a>
                </p>
                <div className="flex items-center md:flex-col xl:flex-row pt-2 font-semibold text-xs md:text-xs lg:text-xs">
                    <button type="button" className="w-full border-l border-t border-b md:border-r rounded-l-md text-black bg-white hover:text-white hover:bg-black px-4 py-2">
                        Add to Favourite
                    </button>
                    <button type="button" className="w-full border text-black bg-white hover:text-white hover:bg-black rounded-r-md px-4 py-2">
                        Add to Meal Plan
                    </button>
                </div>
            </div>

        </div>

</div>
    )
}
DisplayCard.propTypes = {
    recipeObj: PropTypes.object.isRequired,    
};
export default DisplayCard;