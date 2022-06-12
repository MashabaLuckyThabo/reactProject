
import {NavLink} from "react-router-dom";



const Home = () => {
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
      <section class="home-main-section">
        <div class="img-wrapper">
          <div class="lady-image"></div>
        </div>
        <div class="call-to-action">
          <h1 class="title">Workers Information</h1>
          <span class="subtitle">Find the best workers that you can hire here for less</span>
          <a href="join.html" class="btn">Hire Me</a>
        </div>
      </section>
      <div class="home-page-circle-1"></div>
      <div class="home-page-circle-2"></div>
      <div class="home-page-circle-3"></div>
      </div>
     
     );
}

export default Home;