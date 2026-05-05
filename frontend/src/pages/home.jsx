import React, { useEffect, useState } from 'react'
import Background from '../component/Background'
import Hero from '../component/Hero'
import Product from './Product'
import OurPolicy from '../component/OurPolicy'
import NewLetterBox from '../component/NewLetterBox'
import Footer from '../component/Footer'

const home = () => {
  let heroData=[
    {text1:"30% OFF Limited Offer",text2:"Style That"},
    {text1:"Discover The Best Of Bold Fashion",text2:"Limited Time Only!"},
    {text1:"Explore Our Best Collection",text2:"Shop Now!"},
    {text1:"Choose Your Perfect Fation Fit",text2:"Now On Sell!"}
  ]
  let [heroCount,setHeroCount]=useState(0)

  useEffect(()=>{
    let interval=setInterval(()=>{
      setHeroCount(prevCount=>(prevCount===3?0:prevCount+1))  
    },3000)
    return ()=> clearInterval(interval)
  },[])

  return (
    <div className='overflow-x-hidden relative top-[75px]'>
      <div className='w-[100vw] lg:h-[88vh] md:h-[50vh] sm:h-[30vh] bg-gradient-to-l from-[#ffffff] to-[#dfd9fa]'>
        <Background heroCount={heroCount}/>
        <Hero heroCount={heroCount} setHeroCount={setHeroCount} heroData={heroData[heroCount]}/>
      </div>
      <Product/>
      <OurPolicy/>
      <NewLetterBox/>
      <Footer/>
    </div>
  )
}

export default home