
import { useEffect, useState } from "react";
import axios from "axios";
import '../css/ProductList.css';




    





const ProductList = (props) =>{

    const [products, setProducts] = useState([]);

    useEffect(() =>{
        fetchProductData();
       },[]);
    
    const fetchProductData = async() =>{
        const Api_Url = "https://fakestoreapi.com/products"
        const params = {
            limit : 10
        }
        try {
            const res = await axios.get(Api_Url,{params});
            const productList = await res.data;
            setProducts(productList);
        } catch (error) {
            console.log(error);
        }
    }
    
    const productList = products.map((product) => {
        return(
            <tr key={product.id}>
                <td><input type="checkbox" name="check" /></td>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td>{product.rating.rate}</td>
            </tr>
        )
        
        
    })

    return(
        <div className="listRender">
         <table className="productList">
            <thead>
            <tr>
                <th><input type="checkbox" name="check" /></th>
                <th>Id</th>
                <th>Title</th>
                <th>Description</th>
                <th>Category</th>
                <th>Rating</th>
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