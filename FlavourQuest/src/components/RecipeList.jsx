import { useSelector } from "react-redux";
import Loader from "./Loader";
import List from "./List";
import { useEffect } from "react";

const RecipeList = () => {  
    const resultList = useSelector(state => state.search);

    useEffect(()=>{
        if (resultList.searchResult.length > 0){
            const element = document.getElementById('searchresult');
            element.scrollIntoView({ behavior: 'smooth'});
        }
    },[resultList.searchResult]);
    
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
                No results found.
            </div>
        );
    }
    
}

export default RecipeList;