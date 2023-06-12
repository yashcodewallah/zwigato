import React from 'react'

function nav() {
  window.addEventListener('scroll', () => {
    const scrollDiv = document.getElementById('navContainer');
    if (window.scrollY > 200) {
      scrollDiv.classList.add('bg-white');
    } else {
      scrollDiv.classList.remove('bg-white');
    }
  });
  return (

<div id="navContainer" className="bg-nav  w-full sticky  top-0  z-50  ">
      <div className="flex py-3  justify-around md:justify-between md:items-center">

        <div className=" md:ml-24 text-center">
          <img src="/images/res-logo.png" alt="" className="w-16 m-auto " />
          <p className=" text-red-900 font-bold text-2xl">ZWIGATO</p>
        </div>

        <div className="hidden md:block ">
          <ul className="flex gap-6 text-xl">
            <li><a>Home</a></li>
            <li><a>Foods</a></li>
            <li><a>Cart</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
        <div className="flex items-center gap-2 md:gap-5 mr-5">
          <div className="flex">         
           <img src="/images/basket.png" className="w-7 h-9 md:w-9 md:h-10"></img>
           <div className=" w-6 h-6 text-white bg-red-500 rounded-full flex items-center justify-center border">9</div>
          </div>

          <img src="/images/user-profile.png" alt="" className="w-7 h-6md:w-9 md:h-8"></img>
          <div className='block md:hidden'>
            <img src="/images/bars-solid.svg" alt="" className='w-5 h-6 md:w-9 md:h-8'/>
        </div>
        </div>

      </div>
    </div>
    )
}

export default nav