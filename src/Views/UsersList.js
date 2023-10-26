import React from "react";

import "../css/Users.css"

const UsersList = (props) => {
    return ( 
        <div className='wlist'>
 
        <table className="workersList">
           <thead>
           <tr>
               <th><input type="checkbox" name="check" onClick={props.handleClick} className="checkItem"/></th>
               <th>UserId</th>
               <th>Names</th>
               <th>Email</th>
               <th>Username</th>
               <th>Address Geolocation</th>
               <th>City</th>
               <th>Contacts</th>
           </tr>
           </thead>
           <tbody>
               {props.UserData}
           </tbody>
       </table>
   </div>
     );
}
 
export default UsersList;