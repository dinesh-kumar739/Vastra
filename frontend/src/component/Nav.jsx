import React, { useContext, useState } from 'react'
import logo from '../assets/Vastra.png'
import { IoSearchCircleOutline } from "react-icons/io5";
import { CgSearch } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";
import { userDataContext } from '../context/UserContext';
import { BiSolidSearch } from "react-icons/bi";
import { IoMdHome } from "react-icons/io";
import { HiOutlineCollection } from "react-icons/hi";
import { MdContacts } from "react-icons/md";
import { Await, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { authDataContext } from '../context/AuthContext';
import { shopDataContext } from '../context/ShopContext';

function Nav() {
    let {getCurrentUser,userData}=useContext(userDataContext)
    let {serverUrl}=useContext(authDataContext)
    let {showSearch,setShowSearch,search,setSearch,getCartCount}=useContext(shopDataContext)
    let [showProfile,setShowProfile]=useState(false)
    let navigate=useNavigate()

    const handleLogout=async (params) => {
        try {
            const result= await axios.post(serverUrl +"/api/auth/logout",{},{withCredentials:true})
            console.log(result.data)
            await getCurrentUser()
            navigate("/signup")
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='w-[99vw] h-[70px] bg-[#1d3878] z-10 fixed top-0 flex items-center justify-between px-[30px] shadow-md shadow-black relative'>
        <div className='w-[20%] lg:w-[30%] flex items-center justify-start gap-[0px]'>
            <img src={logo} className='w-[30px] cursor-pointer' onClick={()=>navigate("/")}/>
            <h1 className='text-[25px] text-[#E6D3B3] font-sans cursor-pointer' onClick={()=>navigate("/")}>astra</h1>
        </div>
        <div className='w-[50%] lg:w-[40%] hidden md:flex'>
            <ul className='flex items-center justify-center gap-[19px] text-[white]'>
                <li className='text-[15px] hover:bg-[#D97706] cursor-pointer bg-[#F59E0B] py-[10px] px-[20px] rounded-2xl' onClick={()=>navigate("/")}>HOME</li>
                <li className='text-[15px] hover:bg-[#D97706] cursor-pointer bg-[#F59E0B] py-[10px] px-[20px] rounded-2xl' onClick={()=>navigate("/collection")}>COLLECTIONS</li>
                <li className='text-[15px] hover:bg-[#D97706] cursor-pointer bg-[#F59E0B] py-[10px] px-[20px] rounded-2xl' onClick={()=>navigate("/about")}>ABOUT</li>
                <li className='text-[15px] hover:bg-[#D97706] cursor-pointer bg-[#F59E0B] py-[10px] px-[20px] rounded-2xl' onClick={()=>navigate("/contact")}>CONTACT</li>
            </ul>
        </div>
        <div className='w-[30%] flex items-center justify-end gap-[20px]'>
            {!showSearch &&<CgSearch  className='w-[29px] h-[29px] text-[#F59E0B] hover:text-[#D97706] cursor-pointer' onClick={()=>{setShowSearch(prev=>!prev);navigate("/collection")}}/>}
            {showSearch &&<BiSolidSearch  className='w-[29px] h-[29px] text-[#F59E0B] cursor-pointer' onClick={()=>setShowSearch(prev=>!prev)}/>}
            { !userData && <CgProfile className='w-[29px] h-[29px] text-[#F59E0B] cursor-pointer' onClick={()=>setShowProfile(prev=>!prev)}/>}
            { userData && <div className='w-[30px] h-[30px] bg-[#F59E0B] hover:bg-[#D97706] text-[white] rounded-full flex items-center justify-center cursor-pointer' onClick={()=>setShowProfile(prev=>!prev)}>{userData?.name.slice(0,1)}</div>}
            <FaShoppingCart className='w-[29px] h-[29px] text-[#F59E0B] hover:text-[#D97706] cursor-pointer hidden md:block' onClick={()=>navigate("/cart")}/>
            <p className='absolute w-[18px] h-[18px] items-center justify-center bg-transparent px-[5px] py-[2px] text-[#F59E0B] rounded-full border-[#F59E0B] border-[1px] text-[9px] top-[10px] right-[23px] hidden md:block'>{getCartCount()}</p>
        </div>
        {showSearch && <div className='w-[100%] h-[80px] bg-[#2564eb60] border-[1px] absolute top-[100%] left-0 right-0 flex items-center justify-center'>
            <input type="text" className='lg:w-[50%] w-[80%] h-[60%] bg-[#201d1dd7] border-[1px] border-[#F59E0B] rounded-[30px] px-[50px] placeholder:text-white text-white text-[18px]' placeholder='Search Here' onChange={(e)=>setSearch(e.target.value)} value={search}/>
        </div>}
        {showProfile &&<div className='absolute w-[220px] h-[150px] bg-[#0a1c43] top-[110%] right-[4%] border-[1px] border-[#aaa9a9] rounded-[10px] z-10'>
            <ul className='w-[100%] h-[100%] flex items-start justify-around flex-col text-[17px] py-[10px] text-[white]'>
                {!userData &&<li className='w-[100%] hover:bg-[#D97706] px-[15px] py-[10px] cursor-pointer' onClick={()=>{navigate("/registration");setShowProfile(false)}}>Login</li>}
                {userData &&<li className='w-[100%] hover:bg-[#D97706] px-[15px] py-[10px] cursor-pointer' onClick={()=>{handleLogout();setShowProfile(false)}}>Logout</li>}
                <li className='w-[100%] hover:bg-[#D97706] px-[15px] py-[10px] cursor-pointer' onClick={()=>{navigate("/order");setShowProfile(false)}} >Orders</li>
                <li className='w-[100%] hover:bg-[#D97706] px-[15px] py-[10px] cursor-pointer' onClick={()=>{navigate("/about");setShowProfile(false)}}>About</li>
            </ul>
        </div>}
        <div className='w-[100vw] h-[90px] flex items-center justify-between px-[20px] text-[12px] fixed bottom-0 left-0 bg-[#1d3878] border-t-[1px] border-t-[#F59E0B] md:hidden'>
            <button className='text-[#F59E0B] hover:text-[#D97706] flex items-center justify-center flex-col gap-[2px]'><IoMdHome className='w-[25px] h-[25px] text-[#F59E0B] hover:text-[#D97706] md:hidden' onClick={()=>navigate("/")}/>Home</button>
            <button className='text-[#F59E0B] hover:text-[#D97706] flex items-center justify-center flex-col gap-[2px]'><HiOutlineCollection className='w-[25px] h-[25px] text-[#F59E0B] hover:text-[#D97706] md:hidden' onClick={()=>navigate("/collection")}/>Collections</button>
            <button className='text-[#F59E0B] hover:text-[#D97706] flex items-center justify-center flex-col gap-[2px]'><MdContacts className='w-[25px] h-[25px] text-[#F59E0B] hover:text-[#D97706] md:hidden' onClick={()=>navigate("/contact")}/>Contact</button>
            <button className='text-[#F59E0B] hover:text-[#D97706] flex items-center justify-center flex-col gap-[2px]' onClick={()=>navigate("/cart")}><FaShoppingCart className='w-[25px] h-[25px] text-[#F59E0B] hover:text-[#D97706] md:hidden'/>Cart</button>
            <p className='absolute w-[18px] h-[18px] flex items-center justify-center bg-transparent border-[1px] border-[#F59E0B] hover:border-[#D97706] px-[5px] py-[2px] text-[#F59E0B] hover:text-[#D97706] font-semibold rounded-full text-[9px] top-[8px] right-[18px]'>{getCartCount()}</p>
        </div>
    </div>
  )
}

export default Nav