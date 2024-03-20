import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { add, updateCartBtnLabel } from '../redux/CartSlice';

const Button = ({product}) => {
    let label = useSelector(state => state.cartBtnLabel);
    const dispatch = useDispatch();
    
    label = (label === false)? 'Remove From Cart': 'Add To Cart';
    
    const handleBtnClick = () => {
        dispatch(add(product)),
        dispatch(updateCartBtnLabel(!label))
    }

    return(
        <button className="font-bold bg-white text-black border-2 border-black" onClick={handleBtnClick}>{label}</button>
    );
}
Button.propTypes = {
    clickHandler: PropTypes.func,
    product: PropTypes.object
}
export default Button;