import { useEffect, useState } from "react";
import axios from "axios";
import "../css/Admin.css";
const AdminLogin = () => {
    const [ count, setCount] = useState(1);
    const [ desc, setDesc] = useState([]);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${count}`)
                .then( (response) => {
                    setDesc(response.data.description);
                    console.log(count)
                    console.log(response.data.description);
                })
    }, [count])




    const {formData, setFormData} = useState({
        email: "",
        password: "",
        roles: ""
    })
    const handleSubmit =(e)=>{
        
    }

    const handleChange=(e)=>{
        const {name, value} = e.target
        setFormData((prevData) =>({...prevData, [name]: value}));
    }

    return ( 
        <div className="loginPortal" onSubmit={handleSubmit}>

            <blockquote className="quote">
                "Hi, Welcome Back!"
            </blockquote>
            <h2 id="logo"> Sign In</h2>
            <form>
                <div className="input-group">
                    <label>Email</label>
                    <input type="email" value="" onChange={handleChange}/>
                </div>

                <div className="input-group">
                    <label>Password</label>
                    <input type="password" value="" onChange={handleChange}/>
                </div>

                <div className="input-group">
                    <label for="roles">Choose your role:</label>
                    <select id="roles" name="roles" onChange={handleChange}>
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>
                    </select>
                </div>

                <div className="input-group">
                    <input type="submit" placeholder="Join in" name="submit"/>
                </div>

                <div className="input-group">
                    <button type="button" className="regbtn">
                        Create Account 
                    </button>
                </div>
                
            </form>

            <button className="btn" onClick={() => setCount(count + 1) }>
                Check Products
            </button>
            <blockquote>
                {desc}
            </blockquote>

            
            
            
        </div>
     );
}
 
export default AdminLogin;