import React from 'react'

function Whyzwigato() {
  return (
    <div className='flex flex-col md:flex-row items-start mt-10' >
        <img src="/images/location.png" data-aos-duration="2000" data-aos="fade-right" className='md:w-6/12'  alt="" />
          <div className='flex md:w-6/12 gap-4 flex-col'>
            <p className=' font-bold text-center md:text-start text-slate-700 text-4xl'>Why <span className='text-red-600 '>Zwigato?</span></p>
            <p className=' text-lg text-slate-600 '>Discover a world of culinary delights with our food delivery app. Enjoy a wide selection of restaurants and cuisines, fast and reliable delivery, and an intuitive user interface for a seamless experience. Benefit from exclusive deals and discounts, personalized recommendations, and convenient payment options. Our app ensures excellent customer support and is available across platforms, making it the ultimate choice for hassle-free dining. Embrace the convenience, satisfaction, and joy of delicious meals delivered right to your doorstep.</p>
            <ul className='flex flex-col gap-7'>
              <li>
                <p className=' font-medium text-lg text-slate-900 flex items-center gap-2'><img src="/images/check.png" className=' w-5 h-5' ></img>Fresh and tasty foods</p>
                <p className='text-slate-700'>High Quality food from Zwigato-certified Restaurants</p>
              </li>
              <li>
                <p className=' font-medium text-lg text-slate-900 flex items-center gap-2'><img src="/images/check.png" className=' w-5 h-5' ></img>Fast and Reliable Delivery</p>
                <p className='text-slate-700'>Delivery within 30 mins of order</p>
              </li>
              <li>
                <p className=' font-medium text-lg text-slate-900 flex items-center gap-2'><img src="/images/check.png" className=' w-5 h-5' ></img>Wide Selection of Restaurants</p>
                <p className='text-slate-700'>The extensive variety of restaurants with popular local eateries, well-known chains, and diverse cuisines.</p>
              </li>
            </ul>
          </div>
        </div>
  )
}

export default Whyzwigato