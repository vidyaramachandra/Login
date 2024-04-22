import './index.css';
import image1 from "./image1.png"
import image2 from "./image2.png"


import React,{useState,useEffect} from "react";
import axios from "axios";

function Forgetpassword() {

    const [data,setData] = useState([]);


    useEffect(()=>{
        axios.get("https://reqres.in/api/users?page=2")
        .then(res=> setData(res.data.data))
        .catch(err=> console.log(err))
      },[])
      console.log(data);
  return (
   

            <div className="flex flex-row gap-0">
            <div className="card">
                <div className="left">
                    <div className="flex flex-row justify-evenly">
                    <img src={image1} alt="logo" className="img mt-5"/>
                    <h1 className="text-white mt-9 text-6xl italic font-semibold">AMS</h1>
                    </div>
                    <img  src={image2} alt="a1" className="img2"/>
    
                </div>
            </div>
            <div className="card2">
                    <h1 className="password">Forget Password</h1>
                  
                    <input type="text" placeholder="Email or phone number" id="email" className="input" /><br/>
                    <button className="button font-semibold">GET  OTP </button>
                    </div>
                    </div>)
                    
    };
   
export default Forgetpassword;