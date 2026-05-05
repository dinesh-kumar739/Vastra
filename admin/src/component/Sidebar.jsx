import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaRegListAlt } from "react-icons/fa";
import { TiTickOutline } from "react-icons/ti";

function Sidebar() {
    let navigate = useNavigate()
  return (
    <div className='w-[18%] min-h-[100vh] border-r-[1px] py-[60px] bg-[#1d3878db] fixed left-0 top-0'>
        <div className='flex flex-col gap-4 pt-[40px] pl-[20%] text-[15px]'>
            <div className='flex items-center justify-center md:justify-start gap-3 border bg-[#1d3878] border-r-0 px-3 py-2 border-[blue] cursor-pointer hover:bg-[#D97706]' onClick={()=>navigate("/add")}>
                <IoIosAddCircleOutline className='w-[20px] h-[20px]'/>
                <p className='hidden md:block'>Add Items</p>
            </div>
            <div className='flex items-center justify-center md:justify-start gap-3 border bg-[#1d3878] border-r-0 px-3 border-[blue] py-2 cursor-pointer hover:bg-[#D97706]' onClick={()=>navigate("/lists")}>
                <FaRegListAlt className='w-[20px] h-[20px]'/>
                <p className='hidden md:block'>List Items</p>
            </div>
            <div className='flex items-center justify-center md:justify-start gap-3 border bg-[#1d3878] border-r-0 border-[blue] px-3 py-2 cursor-pointer hover:bg-[#D97706]' onClick={()=>navigate("/orderes")}>
                <TiTickOutline className='w-[20px] h-[20px]'/>
                <p className='hidden md:block'>Orderes</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar