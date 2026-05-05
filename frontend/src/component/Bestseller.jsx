import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { shopDataContext } from '../context/ShopContext'
import Card from './Card'

function Bestseller() {
    let {products} = useContext(shopDataContext)
    let [bestseller,setBestseller] = useState([])
    useEffect(()=>{
        if(products) {
            let filterProduct=products.filter((item)=>item.bestseller)
            console.log("Bestsellers:", filterProduct)
            setBestseller(filterProduct.slice(0,4));
        }
    },[products])
  return (
    <div>
        <div className='h-[8%] w-[100%] text-center mt-[50px]'>
            <Title text1={"BEST"} text2={"SELLER"}/>
            <p className='w-[100%] m-auto text-[13px] md:text-[20px] px-[10px] text-black'>Step Into Style - New Collection Dropping This Season!</p>
            <div className='w-[100%] h-[50%] mt-[30px] flex items-center justify-center flex-wrap gap-[50px]'>
                {
                    bestseller.map((item,index)=>(
                        <Card key={index} name={item.name} image={item.image1} id={item._id} price={item.price}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Bestseller