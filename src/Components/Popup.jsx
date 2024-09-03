import React from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { IoCloseOutline } from 'react-icons/io5';

const Popup = ({ showPopup, setShowPopup }) => {
  if (!showPopup) return null; // If not showing, return null

  return (
    <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm flex items-center justify-center'>
      <div className='p-4 shadow-md bg-white rounded-md w-[300px] relative'>
        {/* Close Button */}
        <IoCloseOutline
          className='text-2xl absolute top-2 right-2 cursor-pointer'
          onClick={() => setShowPopup(false)}
        />
        
        {/* Header Section */}
        <h1 className='text-2xl font-bold text-dark mb-4'>Login</h1>
        
        {/* Login Form Section */}
        <input
          type="email"
          placeholder='Enter Email'
          className='w-full rounded-md border border-gray-300 px-2 py-1 mb-4'
        />
        <input
          type="password"
          placeholder='***********'
          className='w-full rounded-md border border-gray-300 px-2 py-1 mb-4'
        />
        
        {/* Login Button Section */}
        <button
          className='w-full bg-primary text-white p-2 rounded-md'
          onClick={() => setShowPopup(false)}
        >
          Login
        </button>
        
        {/* Social Login Section */}
        <div className='mt-4'>
          <p className='text-center'>or Login with</p>
          <div className='flex justify-center gap-2 mt-2'>
            <FaFacebook className='text-3xl hover:text-blue-500 duration-200' />
            <FaGoogle className='text-3xl hover:text-primary duration-200' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
