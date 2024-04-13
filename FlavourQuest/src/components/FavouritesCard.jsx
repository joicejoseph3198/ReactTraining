import { IoFastFoodOutline } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";

const FavouritesCard = ({title}) => {
    return (
        <div className="border-slate-600 border-2 relative w-60 h-72 rounded-[30px] bg-green-600 text-transparent/50 text-3xl font-bold text-left p-5 overflow-hidden">
            <IoFastFoodOutline/>
            <p className="py-2 text-[1vw] overflow-hidden">{title}</p>
            <div className="p-5 footer absolute bottom-0 bg-green-600 rounded-[30px] right-0 flex">
                <button><MdArrowOutward/></button>
                <button><IoMdTrash/></button>
            </div>
        </div>
    )
}
export default FavouritesCard;