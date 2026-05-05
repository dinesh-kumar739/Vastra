import React from 'react'
import Logo from "../assets/Vastra.png"
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { authDataContext } from '../context/AuthContext'
import { adminDataContext } from '../context/AdminContext'
import { toast } from 'react-toastify';


function Login() {
    let { setAdminData } = useContext(adminDataContext)
    let [show,setShow]=useState(false)
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")
    let navigate = useNavigate()  
    let {serverUrl} = useContext(authDataContext)
    const [loading,setLoading] = useState(false)

    const  AdminLogin=async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const result = await axios.post( serverUrl + "/api/auth/adminLogin" , {
                email, password
            }, { withCredentials: true })
            console.log(result.data)
            if(result.data) {
                toast.success("AdminLogin Successfully")
                setAdminData({ email })
                navigate("/")
            }
        } catch (error) {
            console.log(error)
            toast.error("AdminLogin Failed")
        }finally{
            setLoading(false)
        }
    }

    return (
        <div className='w-[100vw] h-[100vh] bg-gradient-to-l from-[#ffffff] to-[#bfd9f3] text-[black] flex flex-col items-center justify-start'>
            <div className='w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[0px] cursor-pointer'>
                <img className='w-[70px]' src={Logo} />
                <h1 className='text-[22px] font-sans text-[#1A1A1A]'>astra</h1>
            </div>
            <div className='w-[100%] h-[100px] flex items-center justify-center flex-col gap-[0px]'>
                <span className='text-[25px] font-semibold text-[#d97706]'>Registration Page</span>
                <span className='text-[16px]'>wellcome to vastra , Apply to Admin Login</span>
            </div>
            <div className='max-w-[600px] w-[90%] h-[400px] bg-[#00000025] border-[1px] border-[#d97706] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center'>
                <form action="" onSubmit={AdminLogin} className='w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]'>
                    <div className='w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px] relative'>
                        <input type="email" className='w-[100%] h-[50px] border-[2px] border-[#d97706] backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#d97706] px-[20px] font-semibold' placeholder='Email' required onChange={(e)=>setEmail(e.target.value)} value={email}/>
                        <input type={show?"text":"password"} className='w-[100%] h-[50px] border-[2px] border-[#d97706] backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#d97706] px-[20px] font-semibold' placeholder='Password' required onChange={(e)=>setPassword(e.target.value)} value={password}/>
                        {show && <IoEyeOutline className='w-[20px] bottom-[50%] h-[20px] text-[#d97706] cursor-pointer absolute right-[5%]'onClick={()=>setShow(prev => !prev)}/>}
                        {!show && <IoEyeOffOutline className='w-[20px] h-[20px] bottom-[50%] cursor-pointer text-[#d97706] absolute right-[5%]' onClick={()=>setShow(prev => !prev)}/>}
                        <button className='w-[100%] h-[50px] bg-[#F59E0B] hover:bg-[#d99706] rounded-lg flex flex-col items-center justify-center mt-[20px] text-[17px] font-semibold cursor-pointer'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login