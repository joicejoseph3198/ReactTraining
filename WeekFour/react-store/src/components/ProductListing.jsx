import { useEffect } from "react";
import ProductCard from "./ProductCard";
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import {fetchProducts} from '../redux/ProductSlice';


const ProductListing = () => {
    const productList = useSelector(state => state.product.productList);

    const initialised = useSelector(state => state.product.initialised);
    
    const dispatch = useDispatch();
    useEffect(()=>{
        if(!initialised){
            dispatch(fetchProducts());
        }
    },[]);

    // will fetch the product state from the store
    // and will dispatch add from cartSlice
    return(
        <div>
            <div className="pt-5 flex flex-row overflow-x-scroll"> 
            {productList.map((productObject)=>(
                <ProductCard key={productObject.id} productObj={productObject}/>))}
        </div>
        </div>
        
    )
}

ProductListing.propTypes = {
    productList: PropTypes.array,
    cartHandler: PropTypes.func,
    cartCount: PropTypes.number
}

export default ProductListing;