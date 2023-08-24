import { useEffect, useState } from "react";
import axios from "axios";
import "../css/Admin.css";
import logImage from "../login background.avif"




const AdminLogin = () => {

    const user = {
        name: 'Hedy Lamarr',
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 90,
      }

    // const rand = () =>{
    //     return 
    // }
    

    const [ count, setCount] = useState(1);
    const [ desc, setDesc] = useState([]);

    useEffect(() => {
        // get data from the fake api 
        const fetchdata = async () => {
            const response = await axios.get(`https://fakestoreapi.com/products/${count}`);
            const datas = await response.data;
            setDesc(datas.description);
            // console.log(count)
            // console.log(datas.description);
         }
        fetchdata();
    }, [count]);


    const [formData, setFormData] = useState({
        email: "",
        password: "",
        roles: ""
    })


    const [errors, setErrors] = useState({})

    const handleSubmit =(e)=>{

        const newErrors = {}
        const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;

        if(!formData.email){
            newErrors.username = "username is required";
            
        }
        else if(!formData.password && formData.password.length < 6 && specialCharRegex.text(formData.password)){
            newErrors.password = "password is required and must contains at least one special character and but have not less than 6 characters or more";
        }




        setErrors(newErrors);

        // if(Object.keys(newErrors).length == 0){
        //     //Perform form submission
        // }
    

    }

    const handleChange=(e)=>{
        const {name, value} = e.target
        setFormData({...formData, [name]: value});
    }

    return ( 
        <div className="loginPortal" >

            <div className="login">
            <div className='adminBio'>
                <img
                    className="avatar"
                    src={user.imageUrl}
                    alt={'Photo of '+user.name}
                    style={{
                    width: user.imageSize,
                    height: user.imageSize
                    }}
                />
            </div>



            <blockquote className="quote">
                 Welcome Back!
            </blockquote>
            <label id="logo"> Please enter Your details</label>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Email</label>
                    <input type="email" name="email" onChange={handleChange}/>
                    {errors.email && <div className="error">{errors.email}</div>}
                </div>

                <div className="input-group">
                    <label>Password</label>
                    <input type="password" name="password" onChange={handleChange}/>
                    {errors.password && <div className="error">{errors.password}</div>}
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
                <label><a href="#">Don't have an account? Sign Up </a> </label>
                
            </form>
        
            <button className="btn" onClick={() => setCount(count + 1) }>
                Check Products
            </button>
            <blockquote className="desc">
                {desc}
            </blockquote>
        </div>
            
            
        </div>
     );
}
 
export default AdminLogin;