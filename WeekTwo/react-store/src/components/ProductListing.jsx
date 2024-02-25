import { useContext } from "react";
import ProductCard from "./ProductCard";
import PropTypes from 'prop-types';
import { ProductContext } from "./Dashboard";

const ProductListing = () => {
    
    const { productList, cartItems, handleCartOperation } = useContext(ProductContext);

    return(
        <div>
            <div className="pt-10">
            Cart Items : {cartItems.length}
            </div>
            <div className="pt-5 flex flex-row overflow-x-scroll"> 
            {productList.map((productObject)=>(
                <ProductCard key={productObject.id} productObj={productObject} cartHandler={handleCartOperation}/>))}
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