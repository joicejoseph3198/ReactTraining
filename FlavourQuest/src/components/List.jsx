import { MdArrowOutward } from "react-icons/md";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";
import { useDispatch} from "react-redux";
import { addToFav } from "../redux/slice/FavouriteSlice";


const List = ({resultList, listTitle}) => {
    const dispatch = useDispatch();
    return(
        <div id="searchresult" className="flex flex-start flex-col items-left justify-center rounded-lg bg-green-500 m-10 h-full width-3/4 md:w-11/12 text-transparent/50">
                <div>
                    <p className="p-5 pb-10 text-lg sm:text-md md:text-6xl text-left font-bold w-1/4">{listTitle}</p>
                </div>
                <div className="text-sm md:text-4xl">
                    <ul className="p-10 pb-10 text-left font-bold">
                        {
                        resultList.map((result,index) => {
                            return(
                                <>
                                <div className="p-2 flex flex-row border-transparent/50 border-b-2">
                                    <li className="pr-5">{index+1}.</li>
                                    <li className="text-transparent/75 w-3/4">
                                         {result.title}
                                    </li>
                                    <li className="flex px-2 ml-auto">
                                        <button title="Add to Favourite" className="hover:text-transparent/75" onClick={()=>dispatch(addToFav({id: result?.id, title: result?.title}))}><IoMdHeartEmpty/></button>
                                        <button title="View Details" className="px-2 hover:text-transparent/75"><Link to={`/detail/${result.id}`}><MdArrowOutward/></Link></button>
                                    </li>
                                </div>
                                </>
                            )
                        })
                        }
                    </ul>
                </div>
                {listTitle == "Here's what we got" && <Pagination />}
        </div>
    )
}
export default List;