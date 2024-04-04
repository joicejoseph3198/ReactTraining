import { useDispatch, useSelector } from "react-redux";
import { filterRecipe, updateCurrentSearchTerm, updateSearchText } from "../redux/slice/SearchSlice";

const SearchBar = () => {
    const searchTerm = useSelector(state => state.search.searchText);
    const dispatch = useDispatch();
    
    const buttonClickHandler = () =>{
        dispatch(updateCurrentSearchTerm(searchTerm));
        dispatch(filterRecipe({searchTerm}))
        dispatch(updateSearchText(''));
    }
    
    return(
        <div className="mt-10 mx-10 max-w-xl py-2 px-6 rounded-full bg-gray-50 border flex">
            <input type="text" placeholder="Look for a recipe" value={searchTerm}
            onChange={e=>dispatch(updateSearchText(e.target.value))}
            className="bg-transparent w-full focus:outline-none pr-4  text-sm lg:text-xl font-semibold border-0 " 
           />
            <button className="flex flex-row items-center justify-center px-4 rounded-full text-sm bg-black text-white border-transparent py-1.5 h-[38px] -mr-3"
            onClick={buttonClickHandler}>
                Search
                </button>
            </div>
    )
}
export default SearchBar;