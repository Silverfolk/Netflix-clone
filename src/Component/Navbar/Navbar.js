import React from 'react'
import Netflix_Logo from '../../Utils/Images/Netflix_Logo.png'
import { NETFLIX_LOGO } from "../../Utils/constant";
import { smiley } from '../../Utils/constant';
import {removeUser} from '../../Store/userSlice'
import {useSelector,useDispatch} from "react-redux";
const Navbar = () => {
  const isAuthenticated = useSelector((state)=>state.authReducer);
  const dispatch=useDispatch();
  const LogoutHandler = () =>{
    localStorage.removeItem('token');
    dispatch(removeUser());
  }
  return (
    <div className=" w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
     <img className="w-40  mx-auto md:mx-0"
      src={NETFLIX_LOGO} alt="logo" />

      <div >
        {isAuthenticated ? <div className='flex flex-row justify-between space-x-1'><img className="hidden md:block w-12 h-12" alt="img logo"  src={smiley}/>
   <button className='text-white' onClick={LogoutHandler}>Sign Out</button></div>:<></>}
      </div>
    </div>
  )
}

export default Navbar
