import { useState } from "react";
import Form from "./Form"
import CardList from "./CardList";

const Dashboard = () => {

    const[ productList, setProductList] = useState([]);

    const handleNewProduct = (newProduct) => {
        // will recieve new product from Form
        setProductList([...productList, newProduct]);
    }

    const handleClearList = () => {
        setProductList([])
    }

    const handleRemoveProduct = (index) => {
        const updatedList = [...productList];
        updatedList.splice(index,1);
        setProductList(updatedList);

    }
    
    return(
        <div className="dashboard">
        <Form productFetch={handleNewProduct}/>
        <CardList clearList={handleClearList} removeProduct={handleRemoveProduct} products={productList}/>
        </div>
    )
}

export default Dashboard;