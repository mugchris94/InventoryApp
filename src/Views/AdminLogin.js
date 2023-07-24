import { useState } from "react";
import "../css/Admin.css";
const AdminLogin = () => {

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
            <form>
                <label>Email</label>
                <input type="email" value="" onChange={handleChange}/>
                <label>Password</label>
                <input type="password" value="" onChange={handleChange}/>
                <label for="roles">Choose your role:</label>
                <select id="roles" name="roles" onChange={handleChange}>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                </select>
                <input type="submit" placeholder="Join in" name="submit"/>
            </form>
        </div>
     );
}
 
export default AdminLogin;