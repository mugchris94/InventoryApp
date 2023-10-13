import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';
import '../css/WorkersList.css'


// const workers = [
//     {order: Math.floor(Math.random() * 1000),name: "James Rudiger",contact: '+1800 258 369 254',occupation:"Software Engineer"},
//     {order: Math.floor(Math.random() * 1000),name: "James Rudiger",contact: '+1800 258 369 254',occupation:"Software Engineer"},
//     {order: Math.floor(Math.random() * 1000),name: "James Rudiger",contact: '+1800 258 369 254',occupation:"Software Engineer"},
//     {order: Math.floor(Math.random() * 1000),name: "James Rudiger",contact: '+1800 258 369 254',occupation:"Software Engineer"},
//     {order: Math.floor(Math.random() * 1000),name: "James Rudiger",contact: '+1800 258 369 254',occupation:"Software Engineer"}
    
    
// ]


// const workerList = workers.map((worker) => {
// return(
//     <tr>
//         <td><input type="checkbox" name="check" /></td>
//         <td>{worker.order}</td>
//         <td>{worker.name}</td>
//         <td>{worker.occupation}</td>
//         <td>{worker.contact}</td>
//     </tr>
// );
// })

const handleClick=(e)=>{

}



const Workers = () => {
    // const [selected, setSelected] = useState()
    const [users, setUsers] = useState([])
    const api_url = "https://fakestoreapi.com/users"
    useEffect( ()=> {
      fetchData();
    },[]);

    const fetchData = async(limit) =>{
        try {
            const res = await axios.get(api_url,{params:{ limit:limit}});
            const datas = res.data;
            console.log(datas);
            setUsers(datas); 

        } catch (error) {
            console.error(error)
        }
    };




    const UserData = users.map((user) => {
                return(
                    <tr key={user.id}>
                        <td><input type="checkbox" name="check" onClick={handleClick}/></td>
                        <td >{user.id}</td>
                        <td >{user.email}</td>
                        <td >{user.username}</td>
                        <td >{user.phone}</td>
                    </tr>
                )
            });
    

    return ( 
        <div className='wlist'>

        
             <table className="workersList">
                <thead>
                <tr>
                    <th><input type="checkbox" name="check" onClick={handleClick}/></th>
                    <th>UserId</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>Contacts</th>
                </tr>
                </thead>
                <tbody>
                    {UserData}
                </tbody>
            </table>
        </div>
     );
}
 
export default Workers;