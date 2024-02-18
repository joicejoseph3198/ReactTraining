import Button from "./Button"

const Card = ({product, index, removeProduct}) => {
    return(
        <div className="card">
            <Button label={"Remove"} clickHandler={()=>removeProduct(index)}></Button>
            <h2>{product.productName}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
        </div>

    )
}

export default Card;