import { useEffect } from "react";
import ProductCard from "./ProductCard";
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";


const ProductListing = () => {
    const productList = useSelector(state => state.product)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchProducts())
    },[])
    // will fetch the product state from the store
    // and will dispatch add from cartSlice
    return(
        <div>
            {/* <div className="pt-10">
            Cart Items : {cartItems.length}
            </div> */}
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