import {useState} from 'react';
import PropTypes from 'prop-types';

const Button = ({clickHandler, product}) => {

    const[isAdded, setIsAdded] = useState(false);

    let label = isAdded ? 'Remove From Cart': 'Add To Cart';
    
    const handleBtnClick = () => {
        clickHandler(product,isAdded);
        setIsAdded(!isAdded);
    }

    return(
        <button className="font-bold bg-white text-black border-2 border-black" onClick={ ( )=> handleBtnClick()}>{label}</button>
    );
}
Button.propTypes = {
    clickHandler: PropTypes.func,
    product: PropTypes.object
}
export default Button;