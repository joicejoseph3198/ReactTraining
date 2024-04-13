import FavouritesCard from "./FavouritesCard";
import { useSelector } from "react-redux";

const Foreground = () => {
    const favouriteList = useSelector(state=> state.favourite.data);
    console.log(favouriteList);
    return (
        <div className="z-[3] relative p-5 h-full w-full flex gap-10 flex-wrap">
            {
                favouriteList.map(recipe => {
                    return (
                        <FavouritesCard title={recipe.title}/>
                    )
                   
                })
            }
        </div>
    )
}
export default Foreground;