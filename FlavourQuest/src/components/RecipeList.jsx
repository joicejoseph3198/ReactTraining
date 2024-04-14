import { useSelector } from "react-redux";
import Loader from "./Loader";
import List from "./List";
import { useEffect } from "react";
import errorImg from "../assets/images/ErrorImg.png"

const RecipeList = () => {  
    const resultList = useSelector(state => state.search);

    useEffect(()=>{
        if (resultList.searchResult.length > 0){
            const element = document.getElementById('searchresult');
            element.scrollIntoView({ behavior: 'smooth'});
        }
    },[resultList.searchResult]);
    
    if(resultList.isError){
        return(
            <div className="flex justify-center items-center">
            <img className=" w-full md:w-2/4 object-contain" src= {errorImg} alt="Error..." />
        </div>
        )
    }

    
    if(resultList.isLoading == true){
        return(
            <Loader/>
        );
    }


    if(resultList.searchResult.length > 0){
        return(
            <div id="searchresult">
                <List resultList={resultList.searchResult} listTitle={"Here's what we got"}/>
            </div>
            
        )
    }

    if(resultList.searchResult == []){
        return (
            <div>
                <p>No results found.</p>
            </div>
        );
    }
    
}

export default RecipeList;