import React , { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import logo from "../assets/vastra.png"
import axios from 'axios'
import { authDataContext } from '../context/AuthContext'
import { adminDataContext } from '../context/AdminContext'
function Nav() {
    let navigate = useNavigate()
    const {serverUrl} = useContext(authDataContext)
    const {getAdmin} = useContext(adminDataContext)
    const logOut=async (req,res) => {
        try {
            const result = await axios.post( serverUrl + "/api/auth/logOut",{withCredentials:true})
            console.log(result.data)
            getAdmin()
            navigate("/login")
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='w-[100vw] h-[70px] bg-[#1d3878] z-10 fixed top-0 flex items-center justify-between px-[30px] overflow-x-hidden shadow-md shadow-black'>
        <div className='w-[30%] flex items-center justify-start gap-[0px] cursor-pointer' onClick={()=>navigate("/")}>
            <img src={logo} alt="" className='w-[30px]'/>
            <h1 className='text-[25px] text-[#E6D3B3] font-sans'>astra</h1>
        </div>
            <button className='text-[15px] cursor-pointer bg-[#F59E0B] hover:bg-[#D97706] py-[10px] px-[20px] rounded-2xl text-white' onClick={logOut}>Logout</button>
    </div>
  )
}

export default Nav