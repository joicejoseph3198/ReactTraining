import healthyFoodImg from "../assets/images/HealthyFood.gif"
import RecommendationList from "./RecommendationList";
import Searchbar from "./SearchBar";

const Home = () => {
    return(
        <div>
            <div className="flex flex-col md:flex-row justify-center items-center ">
                <div className="text-left text-md w-full md:w-2/4 md:text-2xl lg:text-4xl pt-10 p-10">
                    <p>Welcome to <span className="text-emerald-600">FlavorQuest</span>, your ultimate destination for all things culinary! 
                    Discover a world of mouthwatering recipes from diverse cuisines, handpicked and curated by 
                    food enthusiasts just like you. </p>
                    <Searchbar/>
                </div>
                <img className="w-2/4 md:w-1/4  object-contain" src= {healthyFoodImg} alt="Order Food" />
            </div>
            <RecommendationList/>
        </div>
        
    )
}

export default Home;