import FavouritesCard from "./FavouritesCard";
import { useSelector } from "react-redux";
import List from "./List";

const Foreground = () => {
    const favouriteList = useSelector(state=> state.favourite.data);
    return (
        <div className="z-[3] relative p-5 h-full w-full flex items-center justify-center md:justify-end gap-10 flex-wrap">
            {
                favouriteList.map((recipe,index) => {
                    return (
                        <FavouritesCard key={index} title={recipe.title} id={recipe.id}/>
                    )
                   
                })
            }
        </div>
    )
}
export default Foreground;