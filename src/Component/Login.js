import React, { useState,useRef } from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer';
import {addUser} from '../Store/userSlice'
import {ValidatorSignup,ValidatorLogin} from '../Utils/Validator';
import { login,register } from '../Utils/Authentication';
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
const Login = () => {
  const [isLoggedIn,setisLoggedIn] =useState(false);
  const [ValidateMessage,setValidateMessage] = useState(null);
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const LoginHandler = () =>{
    setisLoggedIn(!isLoggedIn);
  }
  const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);
  const contactnumber=useRef(null);
  const authHandler= async () =>{
  if(isLoggedIn){// login
   const message=ValidatorLogin(email.current.value,password.current.value);
  
   if(message){
     setValidateMessage(message);
   }
   else{
      const newObject={
        email:email.current.value,
        password:password.current.value 
      }
      const data = await login(newObject); // Assuming you have a login function in your Authentication module
      console.log(data);
      if (data.status === 200) {
        dispatch(addUser(data?.data));
        localStorage.setItem('token', data?.data?.token);
        navigate('/');
      } else {
        window.alert(data.response.data.message);
      }
   }
  }
  else{
    const message=ValidatorSignup(name.current.value,email.current.value,password.current.value,contactnumber.current.value);
    if(message){
      setValidateMessage(message);
    }
    else{
      const formData={
        fullname:name.current.value,
        email:email.current.value,
        password:password.current.value,
        contactnumber:contactnumber.current.value
      }
      const res=await register(formData);
   if(res.status === 201){
    navigate('/');
    window.alert("User Successfully Registered");
  }
  else{
     console.log(res);
     window.alert(res.response?.data?.message);
  }
    }

    
  }
  }
  return (
    <div className=' bg-hero w-max h-full object-cover '>
    <Navbar />
      
      <div className=' mt-92px bg-gradient-to-b from-black to-transparent ml-727px mr-727px  rounded-lg bg-black opacity-80 font-netflix text-white'>
        <div className='w-450px h-707px pt-14 pl-16 pr-16 flex flex-col gap-1'>
          <h1 className='text-3xl'>{isLoggedIn?"Sign In" :"Sign Up"}</h1>
          <div className='mt-7'>
         {!isLoggedIn && <input ref={name}type='text' className='w-full  p-3  mb-4 bg-gray-800 text-white border border-gray-600 rounded-lg text-lg' placeholder="Username" /> } 
          <input type="email" ref={email}className='w-full  p-3   bg-gray-800 text-white border border-gray-600 rounded-lg text-lg' placeholder="Email or phone number" />
          {!isLoggedIn && <input ref={contactnumber}type='text' className='w-full mt-4 p-3  mb-4 bg-gray-800 text-white border border-gray-600 rounded-lg text-lg' placeholder="Contact Number" /> } 
          <input type="password" ref={password} className='w-full p-3 mt-4  bg-gray-800 text-white border border-gray-600 rounded-lg text-lg' placeholder="Password" />
          <p className="text-red-500 text-sm">{ValidateMessage}</p>
          </div>
          <button className='bg-custom_red hover:bg-blue-500 mt-4 p-2 rounded-lg' onClick={authHandler} >{isLoggedIn?"Sign In":"Sign Up"}</button>
         {isLoggedIn && <p className='text-center mt-4'>Forgot password?</p>} 
          <h3 className='mt-12 text-white cursor-pointer' onClick={LoginHandler}>{isLoggedIn?"New to Netflix? Sign Up Now" :"Already Registered? Sign In"} </h3>
          <p className='mt-4 '>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
         </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
