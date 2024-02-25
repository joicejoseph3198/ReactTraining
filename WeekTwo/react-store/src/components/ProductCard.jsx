import PropTypes from "prop-types";
import Button from "./Button";

const ProductCard = ({ productObj, cartHandler}) => {
  return (
    <div className="min-w-64 border-2 border-black snap-center hover:animate-pulse bg-white">
      <div className="flex flex-wrap flex-row p-5 gap-4 font-bold p-0">
      <div className="justify-self-center">
            <Button product={productObj} clickHandler={cartHandler}/>
        </div>
        <div className="flex flex-col text-2xl p-2">
           <p>#{productObj?.id}</p>
            <img className="grayscale h-40" src={productObj?.image}/>
        </div>
        <div className="flex flex-row gap-4 border-t-2 border-black p-2 pt-5">
          <p>{productObj?.title}</p>
          <p>${productObj?.price}</p>
        </div>
      </div>
    </div>
  );
};
ProductCard.propTypes = {
  productObj: PropTypes.object.isRequired,
  cartHandler: PropTypes.func
};
export default ProductCard;
