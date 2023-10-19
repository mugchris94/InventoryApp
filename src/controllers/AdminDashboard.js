import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';
import UsersList from '../Views/UsersList';
import '../css/Dashboard.css'



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



const AdminDashboard = () => {
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
      <div className='grid-container'>
        <div className='grid-item grid-item-1'>
          <div className='nav-header'>
            <label type="button" className="bt">Info</label>
            <div className='side-info'>
                    
            </div>
           </div>
        </div>
        <div className='grid-item grid-item-2'>
            <div className='side-menu'>
            <h4 className='category'>  <i className="fa fa-home"></i> Dashboard</h4>
            <div className='category-menu'>
                    <ul>
                        <li> <i className="fa fa-folder"></i>  Approved Contracts</li>
                        <li> <i className="fa fa-folder"></i>  Pending Applications</li>
                        <li> <i className="fa fa-folder"></i>  Incomplete Applications</li>
                        <li> <i className="fa fa-folder"></i>  Denied Application</li>
                        <li> <i className="fa fa-folder"></i>  Funded Contracts</li>
                        <li> <i className="fa fa-folder"></i>  Archived Applications</li>
                    </ul>
            </div>
            <h4 className='category'> <i className="fa fa-tools"></i> Other</h4>
                <div className='menu-list'>
                    <ul>
                        <li><i className="fa fa-envelope"></i>Users</li>
                        <li><i className="fa fa-briefcase"></i> Practices</li>
                        <li><i className="fa fa-users"></i>Admins</li>
                    </ul>

                </div>
            </div>
        </div>
        <div className='grid-item grid-item-3'>

            <div class="row">
            <div class="col-sm-3">
                <div class="card" style={{width: "18rem"}}>
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-info">Go somewhere</a>
                    </div>
                </div>
            </div>
            </div>

            <UsersList
                UserData = {UserData}
                handleClick = {handleClick}
            />
        </div>
       
      </div>
     );
}
 
export default AdminDashboard;