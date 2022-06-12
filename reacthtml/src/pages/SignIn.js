
import {NavLink } from "react-router-dom";
// import  '../css/signin.css';


const SignIn = () => {
  
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
         Come In ,  Let’s work .
      </h1>
      <form class="join-form">
        <div class="input-group">
          <label>Name:</label>
          <input type="text"/>
        </div>
        <div class="input-group">
          <label>Password:</label>
          <input type="password"/>
        </div>
        <div class="input-group">
          <button type="submit" class="btn">Submit Me</button>
        </div>
      </form>
    </section>


    <div class="join-page-circle-1"></div>
    <div class="join-page-circle-2"></div>
 </div>
     
     );
  
}

export default SignIn;