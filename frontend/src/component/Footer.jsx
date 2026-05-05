import React from 'react'
import img from "../assets/Vastra.png"

function Footer() {
  return (
    <div className='w-[100%] md:h-[36vh] h-[21vh] mb-[77px] md:mb-[0px]'>
        <div className='w-[100%] md:h-[40vh] h-[16vh] md:mb-[0px] bg-[#dbfcfce9] flex items-center justify-center md:px-[50px] px-[5px]'>
            <div className='md:w-[25%] w-[40%] h-[100%] flex justify-center flex-col gap-[5px]'>
                <div className='flex justify-start gap-[5px] mt-[10px] md:mt-[40px]'>
                    <img src={img} alt="" className='md:w-[40px] md:h-[40px] w-[30px] h-[30px]'/>
                    <p className='text-[19px] md:text-[20px] text-[#D97706]'>VASTRA</p>
                </div>
                <p className='text-[15px] text-[#1e2223] hidden md:block'>Vastra is your all-in-one online shopping destination, offering top-quality products, unbeatable deals, and fast delivery-all backed by trusted service designed to make your life easier every day.</p>
                <p className='text-[15px] text-[#1e2223] flex md:hidden'>Fast. Easy. Reliable. Vastra Shopping</p>
            </div>
            <div className='md:w-[25%] w-[40%] h-[100%] flex items-center justify-center flex-col text-center'>
                <div className='flex items-center justify-center gap-[5px] mt-[10px] md:mt-[40px]'>
                    <p className='text-[19px] md;text-[20px] text-[#D97706] font-sans'>Company</p>
                </div>
                <ul>
                    <li className='text-[15px] text-[#1e2223] cursor-pointer'>Home</li>
                    <li className='text-[15px] text-[#1e2223] cursor-pointer'>About us</li>
                    <li className='text-[15px] text-[#1e2223] cursor-pointer'>Delivery</li>
                    <li className='text-[15px] text-[#1e2223] cursor-pointer'>Privacy Policy</li>
                </ul>
            </div>
            <div className='w-[40%] h-[100%] flex items-center justify-center flex-col text-center'>
                <div className='flex items-center justify-center gap-[5px] mt-[10px] md:mt-[40px]'>
                    <p className='text-[19px] md;text-[20px] text-[#D97706] font-sans'>GET IN TOUCH</p>
                </div>
                <ul>
                    <li className='text-[15px] text-[#1e2223] cursor-pointer'>+91 9876543210</li>
                    <li className='text-[15px] text-[#1e2223] cursor-pointer'>contact@vastra.com</li>
                    <li className='text-[15px] text-[#1e2223] cursor-pointer'>+1-123-456-7890</li>
                    <li className='text-[15px] text-[#1e2223] cursor-pointer'>admin@vastra.com</li>
                </ul>
            </div>
        </div>
        <div className='w-[100%] h-[22px] bg-slate-400 flex items-center justify-center mt-2'>
            <div className='w-[100%] h-[5px] bg-slate-400 flex items-center justify-center'>
                Copyright 2026@vastra.com-All Rights Reserved        
            </div>
        </div>
    </div>
  )
}

export default Footer