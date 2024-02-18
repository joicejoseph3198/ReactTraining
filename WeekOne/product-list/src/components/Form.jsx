import Button from "./Button"
import "./Form.css"
import { useState } from 'react'

const Form = ({productFetch}) => {
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);

    // resets the form input
    const handleClearForm = () => {
        setProductName('');
        setDescription('');
        setPrice(0);
    }

    const handleAdd = () => {
        // Create a new product;
        const newProduct = {
            productName: productName,
            description: description,
            price: price
        };
        // Add the newProduct to productFetch
        productFetch(newProduct);

        handleClearForm();

    }

    return (
        <>
        <form className="form">
        <label>
             Product Name: <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)}></input>
        </label>
        <label> 
            Description: <input value={description} type="text" onChange={(e)=> setDescription(e.target.value)}></input>
        </label>
        <label> 
            Price: <input type="number" value={price} onChange={(e)=> setPrice(e.target.value)}></input>
        </label>
        </form>
        <div className="btn">
            <Button label={"Add"} clickHandler={handleAdd}/>
            <Button label={"Clear"} clickHandler={handleClearForm}/>
        </div>
        </>
    )
}

export default Form