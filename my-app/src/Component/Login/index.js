import './index.css';
import { useNavigate } from 'react-router-dom';
import image1 from "./image1.png"
import image2 from "./image2.png"
import { Link } from 'react-router-dom';
import React, {useState, useEffect,} from "react" ;
import axios from "axios";
import Emailverify from '../Emailverify';

function Login () {
 
  const [username,setName] = useState("");
 
 const [password,setPassword] = useState("");

 const err="";

 const navigate=useNavigate();
 const onName = (event)=>{
  setName(event.target.value);
 }
 const onPassword = (event)=>{
  setPassword(event.target.value);
 }

 const handleSubmit = async (e) => {
  e.preventDefault();
 

  try {
    return navigate('/Otpverification', {replace:true, state:{username}})
    const response = await axios.post('https://5373-116-75-119-35.ngrok-free.app/login', {
      emailId: username,
      password: password
    });

    console.log(response.status)
    if(response.data.message==="OTP sent successfully sent to your registered email-address. verify it using /verify-otp endpoint")
    {
      return navigate('/Otpverification', {replace:true, state:{username}})
      
    }
    
      return err="Enter correct credentilas"
  
  } catch (error) {
    console.error('Login failed', error);
    
  }
};
  return(
  

    <form onSubmit={handleSubmit}>
    <div className='flex flex-row  ' > 

    <div className='container'>
<div className='left'>
  <div className='flex flex-row justify-evenly'>
  <img className='a' src={image1} alt='logo'/>
  <h1 className='text-white mt-9 text-4xl italic ml-9 '>AMS</h1>
  
  </div>
    <div className='flex flex-row justify-between'>

      
        <img  className= 'b'src={image2} alt='img'/>
        </div>
        </div>
        </div>
    <div className="card">
   <h1 className='heading'>Log In</h1>
   <div className='mr-40'>
    
   <input type="Text"placeholder='Email or phone number'onChange={onName} className="input" /> <br/>
   
   <input type="Password"onChange={onPassword} placeholder='password' className="input mt-9 "/> 
   </div>
   <p className='p sm:w-full'>Forgot password</p> <br/>
   <button className='button1' type="submit">Login</button>
   <p className='p'>{err}</p>
   <p className='mr-30 ab '>Have not any account?</p>
   <p className='ml-10  e'>Sign Up</p>
    </div>
    </div>
    </form>
    
  );
}
export default Login;