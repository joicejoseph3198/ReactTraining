import Button from "./Button";
import Card from "./Card";
import "./CardList.css";
import PropTypes from 'prop-types';

const CardList = ({clearList, removeProduct, products}) => {
    return(
        <div className="card-list">
        <Button className='btn-clear-list' label={"Clear List"} clickHandler={clearList}></Button>
        <div className="cards">
        {products.map((currentProduct,index) => (
            <Card key={index} product={currentProduct} index={index} removeProduct={removeProduct}/>
        ))}
        </div>
        </div>
    )
   
}
CardList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object),
    clearList: PropTypes.func,
    removeProduct: PropTypes.func
};
export default CardList;