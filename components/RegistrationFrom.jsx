'use client'
import { React, useState, useEffect } from 'react'
import { FaFacebookF, FaRegEnvelope, FaLinkedinIn, FaGoogle } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import Link from "next/link";
import { useRouter } from 'next/navigation'

import { usePathname } from 'next/navigation';
export default function registration() {
    const router = useRouter();
    const usepath = usePathname();
    console.log(usepath);
    // {
    //   pathname !=== "/registration"?
    // }

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");



    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !phone || !password) {
            setError("All Fields are necessary!!!")
        }
        try {
            const resUserExists = await fetch("api/userExists", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email
                }),
            })
            const { user } = await resUserExists.json();
            if (user) {
                setError("User Already Exists!!");
                return;

            }

            const res = await fetch("api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name, phone, email, password
                })
            })
            if (res.ok) {
                const form = e.target;
                form.reset();
                router.push('/login');

            }
            else {
                console.log("User registration fail")
            }
        }
        catch (error) {
            console.log("User registration fail")

        }

    }



    return (
        <main>

            <div div className="flex flex-col w-full flex-center px-10 text-center items-center justify-center min-h-screen bg-gray-200">
                <div className="bg-white rounded-2xl shadow-2xl flex  w-full max-w-4xl">
                    <div className="w-full p-5">
                        <div className="text-left font-bold">
                            <span className="text-blue-500">Profile</span>Sphere
                            {/* You can add your sign-in form or content here */}
                        </div>
                        <div className="py-10 px-10 w-full flex flex-col items-center justify-center ">
                            <h2 className="text-5xl font-bold text-blue-500 mb-2">Registration</h2>
                            <div className="border-2 w-10 border-blue-500 inline-block mb-2"></div>


                            <form className="flex flex-col items-center w-full" onSubmit={handleSubmit}>
                                <div className="bg-gray-100  p-2 flex items-center mb-3  w-full">

                                    <input type="text" name="name" placeholder='Enter Your Name' onChange={(e) => {
                                        setName(e.target.value)
                                    }} className='bg-gray-100  w-full outline-none text-sm flex-1' />
                                </div>
                                <div className="bg-gray-100  w-full p-2 flex items-center mb-3">

                                    <input type="phone" name="phone" placeholder='Phone No.' onChange={(e) => {
                                        setPhone(e.target.value)
                                    }} className='bg-gray-100 outline-none text-sm flex-1 w-full' />
                                </div>
                                <div className="bg-gray-100  w-full p-2 flex items-center mb-3">
                                    <FaRegEnvelope className="text-gray-400 m-2" />
                                    <input type="email" name="email" onChange={(e) => {
                                        setEmail(e.target.value)
                                    }} placeholder='Email' className='bg-gray-100 outline-none text-sm flex-1' />
                                </div>
                                <div className="bg-gray-100  w-full p-2 flex items-center mb-3">
                                    <MdLockOutline className="text-gray-400 m-2" />
                                    <input type="password" onChange={(e) => {
                                        setPassword(e.target.value)
                                    }} name="password" placeholder='Password' className='bg-gray-100 outline-none text-sm flex-1' />
                                </div>
                                <div className="bg-gray-100  w-full p-2 flex items-center mb-3">
                                    <MdLockOutline className="text-gray-400 m-2" />
                                    <input type="password" name="repassword" placeholder='recheck' className='bg-gray-100 outline-none text-sm flex-1' />
                                </div>
                                <div className="flex flex-col mb-5 items-center justify-center">
                                    <label className='flex-items-center text-xs '></label>


                                    {error && (<div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2 flex items-start">{error}</div>)}


                                    <button className='border border-black rounded-full px-12 py-2 m-3 inline-block font-semibold text-blue-400 hover:text-black' >Submit</button>
                                    <label className='flex-items-center text-xs '><input type="text" name='or' className='mr-1 flex justify-center' />OR</label>
                                    <Link href="/login" className='border border-black rounded-full px-12 py-2 m-3 inline-block font-semibold text-blue-400 hover:text-black' >SignIn
                                    </Link>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}
