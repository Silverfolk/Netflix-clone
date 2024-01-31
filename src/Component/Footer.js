import React from 'react';
import powered_by_logo from '../Utils/Images/powered_by_logo.svg'
const Footer = () => {
  return (
    <div className='bg-black mt-20 opacity-80 font-netflix text-white'>
      <div className='mx-auto pt-20 pb-20 max-w-7xl px-4 sm:px-6 lg:px-8'>
        <h1 className='text-lg font-semibold'>Questions? Call 000-800-100-8343</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4'>
          <p className='text-gray-200 underline'>FAQ</p>
          <p className='text-gray-200 underline'>Help Centre</p>
          <p className='text-gray-200 underline'>Terms of Use</p>
          <p className='text-gray-200 underline'>Privacy</p>
          <p className='text-gray-200 underline'>Cookie Preferences</p>
          <p className='text-gray-200 underline'>Corporate Information</p>
        </div>
        <select name="Language" className='bg-black mt-20 opacity-80 font-white'>
        <img src={powered_by_logo} alt="lang logo"/>
         <option value="English">English</option>
         <option value="Hindi">हिन्दी</option>
         </select>
        
      </div>
    </div>
  );
}

export default Footer;
