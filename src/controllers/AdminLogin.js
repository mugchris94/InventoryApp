import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import "../css/Admin.css";
import Signup from '../Views/Signup';
import Description from '../Views/Description';



const AdminLogin = () => {

    const user = {
        name: 'Hedy Lamarr',
        imageUrl: 'https://imgur.com/pBcut2e.png',
        imageSize: 90,
      }
    
    // const people = [
    //     'Creola Katherine Johnson: mathematician',
    //     'Mario José Molina-Pasquel Henríquez: chemist',
    //     'Mohammad Abdus Salam: physicist',
    //     'Percy Lavon Julian: chemist',
    //     'Subrahmanyan Chandrasekhar: astrophysicist'
    //   ];

    

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
            console.log(datas.description);
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

        // const newErrors = {};
        // const specialCharRegex = '/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/'

        // if(!formData.email){
        //     newErrors.username = "username is required";
            
        // }
        // else if(!formData.password && formData.password.length < 6 && specialCharRegex.text(formData.password)){
        //     newErrors.password = "password is required and must contains at least one special character and but have not less than 6 characters or more";
        // }




        // setErrors(newErrors);

        // if(Object.keys(newErrors).length == 0){
        //     //Perform form submission
        // }
    

    }

    // const listItems = people.map(person => <li>{person}</li>)

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

            <label id="logo"> Log on to BronxTech</label>
                
            
            
            <Signup
                handleSubmit = {handleSubmit()}
                setFormData = {setFormData}
                formData = {formData}
                errors = {errors}
                
            />
                    




            <div className="input-group">
        
            <button id="btn" onClick={() => setCount(count + 1) }>
                Check Products
            </button> 

            </div>

           
             
            
    
        </div>
        <Description 
                desk = {desc}
            />
        
        

        </div>
     );
}
 
export default AdminLogin;