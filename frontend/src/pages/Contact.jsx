import React from 'react'
import Title from '../component/Title'
import contact from "../assets/contact.jpg"
import NewLetterBox from '../component/NewLetterBox'
function Contact() {
  return (
    <div className='w-[99vw] min-h-[100vh] flex items-center justify-center flex-col bg-gradient-to-l from-[#ffffff] to-[#bfd9f3] gap-[50px] pt-[80px]'>
      <Title text1={"CONTACT"} text2={"US"}/>
      <div className='w-[100%] flex items-center justify-center flex-col lg:flex-row'>
        <div className='lg:w-[50%] w-[100%] flex items-center justify-center'>
          <img src={contact} alt="" className='lg:w-[70%] w-[80%] shadow-md shadow-black rounded-[30px]'/>
        </div>
        <div className='lg:w-[50%] w-[80%] flex items-start justify-center gap-[20px] flex-col mt-[20px] lg:mt-[0px]'>
          <p className='lg:w-[80%] w-[100%] text-[#F59E0B] font-bold lg:text-[18px] text-[15px]'>Our Store</p>
          <p className='lg:w-[80%] w-[100%] text-[black] md:text-[16px] text-[13px]'>
            <p>7890 random station</p>
            <p>Indore city, madhya pradesh, India </p>
          </p>
          <p className='lg:w-[80%] w-[100%] text-[black] md:text-[16px] text-[13px]'>
            <p>tel: +91 9876543210</p>
            <p>Email: admin@vastra.com</p>
          </p>
          <p className='lg:w-[80%] w-[100%] text-[15px] text-[#F59E0B] lg:text-[18px] mt-[10px] font-bold'>Career at Vastra</p>
          <p className='lg:w-[80%] w-[100%] text-[black] md:text-[16px] text-[13px]'>Learn more about our teams and job openings</p>
          <button className='px-[30px] py-[20px] flex items-center justify-center text-[white] bg-[#F59E0B] border active:bg-slate-600 rounded-md'>Explore Jobs</button>
        </div>
      </div>
      <NewLetterBox/>
    </div>
  )
}

export default Contact