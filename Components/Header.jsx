import {assets} from '@/Assets/assets'
import axios from 'axios';
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Header = () => {

    const [email,setEmail] = useState("");

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("email",email);
        const response = await axios.post('/api/email',formData);
        console.log("submitted");
        if(response.data.success){
            toast.success(response.data.msg);
            setEmail("");
            console.log("DB Email Added");

        }else{
            toast.error("Error");
        }
    }

  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
            <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto' />
            <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>Get Started <Image src={assets.arrow} alt=''/></button>
        </div>
        <div className='text-center my-8'>
            <h1 className='text-7x1 sm:text-5x1 font-medium'>Latest Blogs</h1>
            <p className='mt-10 maw-w-[740px] m-auto text-xs sm:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <form onSubmit={onSubmitHandler} className='flex justify-between maw-w-[300px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]' action="">
                <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder='Enter your email' className='pl-4 outline-none'/>
                <button type='submit' className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white cursor-pointer'>Subscribe</button>
            </form>
        </div>
    </div>
  )
}

export default Header