import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Display from './pages/Display';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
      
      <div>
            
       
          { <Router>
              <Routes>
                     <Route path="/" element={<Home/>} />
                     <Route path="/signUp" element={<SignUp/>} />
                     <Route path="/signIn" element={<SignIn/>} />
                     <Route path="/display" element={<Display/>} />
                   
              </Routes>        
          </Router> }
  
      </div>

  );
}

export default App;
