'use client'
import React from 'react'
import { FaFacebookF, FaRegEnvelope, FaLinkedinIn, FaGoogle } from 'react-icons/fa';

import Navbar from "../../components/Navbar";
import { usePathname } from 'next/navigation';
import RegistrationFrom from '../../components/RegistrationFrom';

export default function registration() {
  const usepath = usePathname();
  console.log(usepath);

  // {
  //   pathname !=== "/registration"?
  // }

  const onsubmit = () => {
    alert("sumited successfully");
  }
  return (
    <main>
      <Navbar />
      <RegistrationFrom />
      {/* <div div className="flex flex-col w-full flex-center px-10 text-center items-center justify-center min-h-screen bg-gray-200">
        <div className="bg-white rounded-2xl shadow-2xl flex  w-full max-w-4xl">
          <div className="w-full p-5">
            <div className="text-left font-bold">
              <span className="text-blue-500">Company</span>Name
             
            </div>
            <div className="py-10 px-10 w-full items-center justify-center ">
              <h2 className="text-5xl font-bold text-blue-500 mb-2">Registration</h2>
              <div className="border-2 w-10 border-blue-500 inline-block mb-2"></div>


              <div className="flex flex-col items-center w-full">
                <div className="bg-gray-100  p-2 flex items-center mb-3  w-full">

                  <input type="text" name="name" placeholder='Enter Your Name' className='bg-gray-100  w-full outline-none text-sm flex-1' />
                </div>
                <div className="bg-gray-100  w-full p-2 flex items-center mb-3">

                  <input type="phone" name="phone" placeholder='Phone No.' className='bg-gray-100 outline-none text-sm flex-1 w-full' />
                </div>
                <div className="bg-gray-100  w-full p-2 flex items-center mb-3">
                  <FaRegEnvelope className="text-gray-400 m-2" />
                  <input type="email" name="email" placeholder='Email' className='bg-gray-100 outline-none text-sm flex-1' />
                </div>
                <div className="bg-gray-100  w-full p-2 flex items-center mb-3">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input type="password" name="password" placeholder='Password' className='bg-gray-100 outline-none text-sm flex-1' />
                </div>
                <div className="bg-gray-100  w-full p-2 flex items-center mb-3">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input type="password" name="repassword" placeholder='recheck' className='bg-gray-100 outline-none text-sm flex-1' />
                </div>
                <div className="flex flex-col mb-5">
                  <label className='flex-items-center text-xs '><input type="checkbox" name='remember' className='mr-1' />Remember me</label>
                  <button className='border border-black rounded-full px-12 py-2 m-3 inline-block font-semibold text-blue-400 hover:text-black' onClick={onsubmit}>Submit</button>
                  <label className='flex-items-center text-xs '><input type="text" name='or' className='mr-1 flex justify-center' />OR</label>
                  <Link href="/login" className='border border-black rounded-full px-12 py-2 m-3 inline-block font-semibold text-blue-400 hover:text-black' >SignIn
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div> */}
    </main>
  );
}
