import './index.css';
import image1 from "./image1.png"
import image2 from "./image2.png"
import { useNavigate } from 'react-router-dom';
import React, {useState, useEffect} from "react" ;
import axios from "axios" ;
import Otpverification from '../Otpverification';


function Emailverify() {
const err="";
  const [email,setName] = useState("");
 
  const navigate=useNavigate();

  const handlecontinue = async () => {
    
    try {
      const response = await axios.post('https://0516-2401-4900-1cc4-177a-d94b-9393-c201-ede5.ngrok-free.app/otp', {
       toEmail:email
      });
  
      console.log(response.data)
      if(response.data==="Login Successfull!")
      {
  
        
         
        return navigate('/Otpverification')
        
        
      }
      
        return err="Enter correct credentilas"
      
      
     
      
      
    } catch (error) {
      console.error('Login failed', error);
      
    }
  };


 


  return (
    <div className='flex flex-row gap-0' > 
    <div className='rounded-3xl shadow-md bg-inherit p-2.5 w-2/4'>
<div className='w-auto h-screen rounded-3xl  bg-gradient-to-tr from-purple-700 to-pink-400 '>
  <div className='flex flex-row justify-evenly'>
  <img className='ml-5 mr-52 h-20 w-20' src={image1} alt='logo'/>
  <h1 className='text-white mt-9 text-4xl italic ml-9'>AMS</h1>
  
  </div>
    <div className='flex flex-row justify-between'>

        
        <img  className= 'b h-96' src={image2} alt='img'/>
        </div>
        </div>
        </div>
    <div className="card">
   <h1 className='heading mt-9'>OTP Verification</h1>
   <p className='p'>Enter Registered Email to generate One Time Password  </p>
   <div className='mr-20'>
    
   <input type="Text"placeholder='Email' className="input" onChange={(e)=>{setName(e.target.value)}} /> 
   </div>
   <button className='button' onClick={handlecontinue}>Continue</button>
    </div>
    </div>
    
  );
}

export default Emailverify;