import React from 'react'
import { Link } from 'react-router-dom'

function header() {
  return (
    <div className='flex flex-col md:flex-row  justify-between ' >
    <div data-aos="fade-right" data-aos-easing="ease-out-cubic"
 data-aos-duration="1000" className='text-slate-900 text-lg px-2 text-center md:text-left md:text-xl font-serif flex-wrap'>
      <p className=' md:text-3xl '>When <span className='text-4xl md:text-8xl text-red-700'>HUNGER</span> strikes, </p>
      <p className=' md:text-4xl text-rock'><span className='text-3xl md:text-5xl font-rock text-red-500'>we're just a </span> few taps away.</p>
      <p className=' text-3xl mt-18'>Order now  <span className='text-red-600'>and</span>  satisfy your cravings</p>
      <div className='flex justify-center md:justify-start gap-10 mt-5 text-lg  font-serif'>
        <Link to="/foods" className=' bg-red-600 text-white py-2 px-5 duration-300 hover:text-red-600 hover:bg-white hover:border-red-600 hover:border-2'>
          Order now
        </Link>
        <Link to="/foods" className=' bg-white text-red-600 py-2 px-5 border-red-600  border-2' >
          See all Foods
        </Link>
      </div>
      <div className='flex justify-center md:justify-start gap-10 text-red-600  text-base mt-5'>
        <p className='flex gap-2 items-center'><img src="/images/check.png" className='w-5'></img>no shipping charge</p>
        <p className='flex gap-2 items-center'><img src="/images/check.png" className='w-5'></img>100% Hygienic food</p>
      </div>
    </div>
    <img data-aos="fade-left"  data-aos-easing="ease-out-cubic"
    data-aos-duration="1000"src="/images/hero.png" alt="" className='w-full md:w-6/12'></img>
  
  
  </div>
    
  )
}

export default header