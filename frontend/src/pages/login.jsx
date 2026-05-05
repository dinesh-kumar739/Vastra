import React from 'react'
import Logo from '../assets/Vastra.png'
import google from '../assets/google.png'
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useContext } from 'react';
import { authDataContext } from '../context/authContext';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../utils/Firebase.js';
import axios from 'axios'
import { userDataContext } from '../context/UserContext.jsx';

const login = () => {
    let [show,setShow]=useState(false)
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")
    let {serverUrl}=useContext(authDataContext)
    let {getCurrentUser}=useContext(userDataContext)

    let navigate = useNavigate()
    const handleLogin = async (e)=>{
        e.preventDefault() 
        try {
            let result= await axios.post(serverUrl+"/api/auth/login",{
                email,password
            },{withCredentials:true})
            console.log(result.data)
            await getCurrentUser()
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    const googleLogin = async ()=>{
        try {
            const response = await signInWithPopup(auth,provider)
            let user=response.user
            let name=user.displayName
            let email=user.email
        
            const result=await axios.post(serverUrl+"/api/auth/googleLogin",{name,email},{withCredentials:true})
            console.log(result.data)
            getCurrentUser()
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
    <div className='w-[100vw] h-[100vh] bg-gradient-to-l from-[#ffffff] to-[#bfd9f3] text-[#000000] flex flex-col items-center justify-start'>
        <div className='w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[0px] cursor-pointer' onClick={()=>navigate("/")}>
            <img className='w-[100px]' src={Logo} />
            <h1 className='text-[25px] text-[#D97706] font-semibold font-sans'>Vastra</h1>
        </div>
        <div className='w-[100%] h-[100px] flex items-center justify-center flex-col gap-[0px]'>
            <span className='text-[25px] font-semibold'>Registration Page</span>
            <span className='text-[16px]'>wellcome to vastra , place your order</span>
        </div>
        <div className='max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border-[1px] border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center'>
            <form onSubmit={handleLogin} action="" className='w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]'>
                <div className='w-[90%] h-[50px] bg-[#F59E0B] rounded-lg flex items-center justify-center gap-[2px] py-[10px] cursor-pointer' onClick={googleLogin}>
                    <img src={google} alt="" className='w-[70px]'/> resistration using Google
                </div>
                <div className='w-[100%] h-[20px] flex items-center justify-center gap-[10px]'>
                    <div className='w-[40%] h-[1px] bg-[#96969635]'></div>OR<div className='w-[40%] h-[1px] bg-[#96969635]'></div>
                </div>
                <div className='w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px] relative'>
                    <input type="mail" className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#0a0a0aa5] px-[20px] font-semibold' placeholder='Email' required onChange={(e)=>setEmail(e.target.value)} value={email}/>
                    <input type={show?"text":"password"} className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#0a0a0aa5] px-[20px] font-semibold' placeholder='Password' required onChange={(e)=>setPassword(e.target.value)} value={password}/>
                    {show && <IoEyeOutline className='w-[20px] bottom-[57%] h-[20px] cursor-pointer absolute right-[5%]'onClick={()=>setShow(prev => !prev)}/>}
                    {!show && <IoEyeOffOutline className='w-[20px] h-[20px] bottom-[57%] cursor-pointer absolute right-[5%]' onClick={()=>setShow(prev => !prev)}/>}
                    <button className='w-[100%] h-[50px] bg-[#F59E0B] rounded-lg flex flex-col items-center justify-center mt-[20px] text-[17px] font-semibold cursor-pointer'>Login</button>
                    <p className='flex gap-[10px]'>you haven't any account ? <span className='cursor-pointer text-[#5555f6cf] text-[17px] font-semibold' onClick={()=>navigate("/registration")}>New Resistration</span></p>
                </div>
            </form>
        </div>
    </div>
    )
}

export default login