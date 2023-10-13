
import React from 'react';
import "../css/signup.css";

const Signup = (props) => {

    const handleChange=(e)=>{
        const {name, value} = e.target
        props.setFormData({...props.formData, [name]: value});
    }

    return ( 

        <div className="signup">
            <form onSubmit={props.handleSubmit}>
                
                <div className='inputs'>
                <label>Username</label>
                <div className="input-group">
                    
                    <input type="text" name="username" onChange={handleChange}/>
                    
                </div>
                <label>Email</label>
                <div className="input-group">
                    
                    <input type="email" name="email" onChange={handleChange}/>
                    {props.errors.email && <div className="error">{props.errors.email}</div>}
                </div>

                <label>Password</label>
                <div className="input-group">
                    
                    <input type="password" name="password" onChange={handleChange}/>
                    {props.errors.password && <div className="error">{props.errors.password}</div>}
                </div>
                </div>


                <div className="input-group">
                <input type="submit" placeholder="Join in" name="submit"/>
                </div>

                <label><a href="#" className='create_acc'>Don't have an account? Sign Up </a> </label>
            </form>
        </div>
     );
}
 
export default Signup;