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
     
    </main>
  );
}
