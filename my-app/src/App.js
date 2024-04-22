import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forgetpassword from './Component/Forgetpassword';
import './App.css';
import Emailverify from './Component/Emailverify';
import Login from './Component/Login';
import Otpverification from './Component/Otpverification';
 

function App() {
  return (
  
<BrowserRouter>
    <Routes>

   <Route path='/' element={<Login/>}/>
   <Route path='/Otpverification' element={<Otpverification/>}/>

 </Routes>
   
     </BrowserRouter>



  );
}

export default App;
