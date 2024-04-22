import './index.css';
import axios from 'axios';
import { useState } from 'react';
import image1 from "./image1.png"
import image2 from "./image2.png"
import { useLocation } from 'react-router-dom';
import React, { useRef } from 'react';
import Popup from 'reactjs-popup';


function Otpverification(props) {
  const [otp,setotp]=useState("");
const Location=useLocation()
const email=props.username;


//const email=Location.state.username
const handlesubmit=async(e)=>{
  e.preventdefault();

  try {
    const response=await axios.post("https://5373-116-75-119-35.ngrok-free.app/verify p",{
      emailId: email,
    oneTimePassword:otp,
    context: "LOGIN",

    })
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}


  return (
    <div className="part2">
    <div className="part1" >
    <div className="color" >
      <div className='cc'><img className="a1" src={image1} alt="logo"/></div>
      <div><h1 className="text-white mt-9 text-7xl italic ml-9 text-sm">AMS</h1></div>
    </div>
      <img  src={image2} alt="a1" className="image12"/>
    </div>
    <div className="registre">
    <form className='for' onSubmit={handlesubmit}>
    <br></br>
    <br></br>
    <br></br>
    <h1 className='c1'>Verification Code</h1>
    <br></br>
    <p className="f1">Enter the OTP code which have sent to your Email address</p>
    <br>
    </br>
    <br></br>
    <br></br>
    <div className="otp"> 
    <br></br>
    <br></br>
    <div>
    <input 
                type="text"
                class="w-14 h-14 text-center text-2xl mr-4 font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                pattern="\d*" maxlength="1" /></div>
   <div> <input 
                type="text"
                class="w-14 h-14 text-center text-2xl mr-4 font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                pattern="\d*" maxlength="1" /></div>
   <div> <input
                type="text"
                class="w-14 h-14 text-center text-2xl mr-4 font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                pattern="\d*" maxlength="1" /></div>
  <div> <input  
                type="text"
                class="w-14 h-14 text-center text-2xl mr-4 font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                pattern="\d*" maxlength="1" /></div>
    <div><input  
                type="text"
                class="w-14 h-14 text-center text-2xl mr-4 font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                pattern="\d*" maxlength="1" /></div>
     <div> <input  
                type="text"
                class="w-14 h-14 text-center text-2xl mr-4 font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                pattern="\d*" maxlength="1" /></div>
    </div>
  
   <br>
   </br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
    <button className="button" type="submit" >Confirm</button>
 </form>
    </div>
    </div>
  );
}

export default Otpverification;