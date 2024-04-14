import { IoFastFoodOutline } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import { useDispatch } from "react-redux";
import { removeFromFav } from "../redux/slice/FavouriteSlice";
import { Link } from "react-router-dom";

const FavouritesCard = ({title,id}) => {
    const dispatch = useDispatch();
    return (
        <div className="border-2 border-transparent/50 flex justify-between items-center gap-1 w-full md:w-2/4 h-auto rounded-[30px] bg-green-500 text-transparent/50 hover:text-black hover:border-black text-sm md:text-3xl font-bold text-left p-5 overflow-hidden">
            <p className="py-2 text-md overflow-hidden">{title}</p>
            <div className="p-5 bg-transparent rounded-[30px] right-0 flex">
                <button title="View Details" className="hover:text-transparent/50"><Link to={`/detail/${id}`}><MdArrowOutward/></Link></button>
                <button title="Delete" className="hover:text-transparent/50" onClick={()=> dispatch(removeFromFav(id))}><IoMdTrash/></button>
            </div>
        </div>
    )
}
export default FavouritesCard;