import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { add } from '../redux/CartSlice';

const Button = ({product}) => {
    const dispatch = useDispatch();
    
    const handleBtnClick = () => {
        dispatch(add(product))
    }

    return(
        <button className="font-bold bg-white text-black border-2 border-black" onClick={handleBtnClick}>Add to Cart</button>
    );
}
Button.propTypes = {
    clickHandler: PropTypes.func,
    product: PropTypes.object
}
export default Button;