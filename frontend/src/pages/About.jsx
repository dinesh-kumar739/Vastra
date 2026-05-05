import React from 'react'
import Title from '../component/Title'
import about from "../assets/about.png"
import NewLetterBox from '../component/NewLetterBox'

function About() {
  return (
    <div className='w-[99vw] min-h-[100vh] flex items-center justify-center flex-col bg-gradient-to-l from-[#ffffff] to-[#bfd9f3] gap-[50px] pt-[80px]'>
      <Title text1={"ABOUT"} text2={"US"}/>
      <div className='w-[100%] flex items-center justify-center flex-col lg:flex-row'>
        <div className='lg:w-[50%] w-[80%] flex items-start justify-center gap-[20px] flex-col mt-[20px] lg:mt-[0px] lg:ml-[50px]'>
          <p className='lg:w-[80%] w-[100%] text-[black] md:text-[16px] text-[13px]'>VASTRA is a modern clothing destination built for individuals who value both style and simplicity. Our mission is to make high-quality fashion accessible without compromising on comfort, design, or affordability.</p>
          <p className='lg:w-[80%] w-[100%] text-[black] md:text-[16px] text-[13px]'>At VASTRA, we carefully curate a collection of everyday essentials and trend-forward pieces that fit seamlessly into your lifestyle. Whether you're looking for casual wear, minimal basics, or statement outfits, every product is selected with attention to fabric quality, fit, and durability.</p>
          <p className='lg:w-[80%] w-[100%] text-[black] md:text-[16px] text-[13px]'>We believe that clothing is more than just appearance—it’s a reflection of confidence and personality. That’s why we focus on clean designs, versatile styles, and timeless aesthetics that never go out of trend. Our platform is designed to provide a smooth and enjoyable shopping experience.</p>
          <p className='lg:w-[80%] w-[100%] text-[black] text-[15px] lg:text-[18px] font-bold'>Our Mission</p>
          <p className='lg:w-[80%] w-[100%] text-[black] md:text-[16px] text-[13px]'>Our mission is to redefine everyday fashion by offering high-quality clothing that blends comfort, style, and affordability. At VASTRA, we aim to empower individuals to express themselves confidently through thoughtfully designed apparel. We are committed to maintaining consistency in quality, building trust with our customers, and continuously evolving our collections to meet modern fashion needs while keeping simplicity at the core.</p>
        </div>
        <div className='lg:w-[50%] w-[100%] flex items-center justify-center'>
          <img src={about} alt="" className='lg:w-[65%] w-[80%] shadow-md shadow-black rounded-sm'/>
        </div>
      </div>
      <div className='w-[100%] flex items-center justify-center flex-col gap-[10px]'>
        <Title text1={"WHY"} text2={"CHOOSE US"}/>
        <div className='w-[80%] flex items-center justify-center lg:flex-row flex-col py-[40px]'>
          <div className='lg:w-[33%] w-[90%] h-[250px] border-[1px] border-[#F59E0B] flex items-center justify-center gap-[20px] flex-col px-[40px] py-[10px] text-[white] backdrop-blur-[2px] bg-[#0e0e0e5d]'>
            <b className='text-[20px] font-semibold text-[#111827]'>Quality Assurance</b>
            <p>We guarantee quality through strict checks, reliable sourcing, and a commitment to customer satisfaction always.</p>
          </div>
          <div className='lg:w-[33%] w-[90%] h-[250px] border-[1px] border-[#F59E0B] flex items-center justify-center gap-[20px] flex-col px-[40px] py-[10px] text-[white] m-[4px] backdrop-blur-[2px] bg-[#0e0e0e5d]'>
            <b className='text-[20px] font-semibold text-[#111827]'>Convenience</b>
            <p>Shop easily with fast delivery, simple navigation, secure checkout, and everything you need in one place.</p>
          </div>
          <div className='lg:w-[33%] w-[90%] h-[250px] border-[1px] border-[#F59E0B] flex items-center justify-center gap-[20px] flex-col px-[40px] py-[10px] text-[white] backdrop-blur-[2px] bg-[#0e0e0e5d]'>
            <b className='text-[20px] font-semibold text-[#111827]'>Exceptional Customer Service</b>
            <p>Our dedicated support team ensures quick responses, helpful solutions, and a smooth shopping experience every time.</p>
          </div>
        </div>
      </div>
      <NewLetterBox/>
    </div>
  )
}

export default About