import {NavLink } from "react-router-dom";
// import  '../css/display.css';
import   {useState, useEffect} from 'react';
import Axios from 'axios';



const Display = () => {

     const [employeeList, setEmployeeList] = useState([]);


     useEffect(()=> {

       Axios.get("http://localhost:3000/read").then((response)=>{
       setEmployeeList(response.data);
     })  

     }, []);

     const deleteFood = (id) => {
         Axios.delete(`http://localhost:3000/delete/${id}`) 
         

     };

    
   
     return( 

      <div class="full-height-grow">
      <section  >
          <header class="main-header">
              <a href="/" class="brand-logo">
                 <div class="brand-logo-name">WeHireYou</div>
              </a>
              <nav class="main-nav">
                 <ul>
                     <li><NavLink to="/" >Home</NavLink></li>
                     <li><NavLink to="/signIn">Sign In</NavLink></li>
                     <li><NavLink to="/signUp">Sign Up</NavLink></li>
                     <li><NavLink to="/display">display</NavLink></li>
                 </ul>
              </nav>
          </header>




          {employeeList.map((val, key) => {
            return <div class="container">
                      <div class="card">
                         <div class="content">
                            <div class="imgBx"><img src="image/me.jpg" width="250" height="250"/></div>
                            <div class="contentBx">
                                <h4>{val.employeeName}</h4>
                                <h4>{val.employeeEmail}</h4>
                             </div>
                             <button onClick={() => deleteFood(val._id) }>Delete</button>
                             
                           </div>
                        </div>
                    </div>
         
        })}
      </section>
   </div>
     
     );
}

export default Display;