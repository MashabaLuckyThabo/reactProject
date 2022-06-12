import {NavLink} from "react-router-dom";
// import  '../css/signup.css';
import  {useState} from 'react';
import Axios from 'axios';

// const  [employeeName, setEmployeeName] = useState("");
// const  [employeeEmail, setEmployeeEmail] = useState("");
// const  [employeePassword, setEmployeePassword] = useState(""); 


const SignUp = () => {
     
     const  [employeeName, setEmployeeName] = useState("");
     const  [employeeEmail, setEmployeeEmail] = useState("");
     const  [employeePassword, setEmployeePassword] = useState(""); 

     const [employeeList, setEmployeeList] = useState([]);



     
     const addToList = () => {
     Axios.post("http://localhost:3000/insert", {

          employeeName : employeeName,
          employeeEmail : employeeEmail,
          employeePassword : employeePassword,

     });

    };

     return( 

      <div class="container full-height-grow">
     
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
        <section class="join-main-section">
          <h1 class="join-text">
            Join Us ,  Be . Us ,  Represent Us.    
          </h1>
          <form class="join-form">
            <div class="input-group">
              <label>Name:</label>
              <input type="text"  onChange={(event) => {setEmployeeName(event.target.value);}}  />
            </div>
            <div class="input-group">
              <label>Email:</label>
              <input type="email"  onChange={(event) => {setEmployeeEmail(event.target.value);}} />
            </div>
            <div class="input-group">
              <label>Password:</label>
              <input type="password" onChange={(event) => {setEmployeePassword(event.target.value);}}  />
            </div>
            <div class="input-group">
              <button type="submit" onClick={addToList} class="btn">Submit Me</button> 
            </div>
          </form>
       
        </section>
     </div>
    
     );
  
}

export default SignUp;