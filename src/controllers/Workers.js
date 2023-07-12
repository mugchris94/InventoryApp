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
    const [users, setUsers] = useState()

    useEffect( ()=> {
        axios.get("https://fakestoreapi.com/users")
            .then(res => {
                const datas = res.data;
                if(datas.length <= 5){
                    console.log(datas);
                    setUsers(datas);  
                }
                  
            }).catch((error)=>{
                console.error(error)
            })
    })


    return ( 
        <div className='wlist'>

        
             <table className="workersList">
                <thead>
                <tr>
                    <th><input type="checkbox" name="check" onClick={handleClick}/></th>
                    <th>Order</th>
                    <th>Names</th>
                    <th>Occupation</th>
                    <th>Contacts</th>
                </tr>
                </thead>
                <tbody>
                    {/* {users} */}
                </tbody>
            </table>
        </div>
     );
}
 
export default Workers;