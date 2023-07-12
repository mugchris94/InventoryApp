
import { useState } from "react";
import '../css/ProductList.css';

const products = [
    {id:1, manufacturer:'apple', model: 'macbook air',price:3000},
    {id:2, manufacturer:'hp', model: 'spectre' ,price:2000},
    {id:3, manufacturer:'Dell', model: 'Inspiron' ,price:1500},
    {id:4, manufacturer:'Dell', model: 'Dell XPS 13-9350', price:1900},
    {id:5, manufacturer:'Asus', model: 'ZenBook', price:1750}
  ]

const productList = products.map((product) => {
    return(
        <tr key={product.id}>
            <td><input type="checkbox" name="check" /></td>
            <td>{product.id}</td>
            <td>{product.manufacturer}</td>
            <td>{product.model}</td>
            <td>{product.price}</td>
        </tr>
    )
    
    
})

const ProductList = (props) =>{

    return(
        <div className="listRender">
         <table className="productList">
            <thead>
            <tr>
                <th><input type="checkbox" name="check" /></th>
                <th>Id</th>
                <th>Product model</th>
                <th>Product manufacturer</th>
                <th>Product Price</th>
            </tr>
            </thead>
            <tbody>
                {productList}
            </tbody>
         </table>
    </div>
    )
    
}

export default ProductList;