import healthyFoodImg from "../assets/images/HealthyFood.gif"
import RecommendationList from "./RecommendationList";
import Searchbar from "./SearchBar";
import transition from "../transition";

const Home = () => {
    return(
        <div>
              <div className="flex flex-col items-center justify-center">
                <div className="p-5 flex flex-col md:flex-row items-center justify-center mt-10">
                    <p className="w-3/4 lg:w-2/4 text-sm md:text-4xl text-left">Welcome to <span className="text-emerald-600">FlavorQuest</span>, your ultimate destination for all things culinary! 
                    Discover a world of mouthwatering recipes from diverse cuisines, handpicked and curated by 
                    food enthusiasts just like you.
                     </p>
                    <img className="w-2/4 lg:w-1/4 h-auto" src={healthyFoodImg} alt="ThinkingOfFood.jpg"/>
                </div>
                <div className="w-3/4">
                    <Searchbar/> 
                </div>
            </div>
            <RecommendationList/>
        </div>
        
    )
}

export default transition(Home);