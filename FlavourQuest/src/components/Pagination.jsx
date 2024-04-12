import { useDispatch, useSelector } from "react-redux";
import { filterRecipe } from "../redux/slice/SearchSlice";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";

const Pagination =() =>{
    const page = useSelector(state=> state.search.page);
    const totalPages = useSelector(state => state.search.totalPages);
    const offset = useSelector(state=> state.search.offset);
    const searchTerm = useSelector(state => state.search.currentSearchTerm);
    const dispatch = useDispatch();

    const nextPage = () => {
        const newOffset = offset + 10;
        dispatch(filterRecipe({searchTerm, offset: newOffset}))
    }
    const prevPage = () => {
        const newOffset = offset - 10;
        dispatch(filterRecipe({searchTerm, offset: newOffset}))
    }

    if(totalPages > 1){
        return(
            <div className="flex flex-wrap text-sm sm:text-sm md:text-xl py-5 font-bold w-1/4 ml-auto">
                <button onClick={prevPage}><MdArrowBackIos/></button>
                <p className="px-5"> Page {page} of {totalPages} </p>
                <button onClick={nextPage}><MdArrowForwardIos/></button>
            </div>
        )
    }
    
}
export default Pagination;