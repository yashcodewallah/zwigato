import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import CartModal from './CartModal';
import { NavLink } from 'react-router-dom';
import NavigationMob from "./NavigationMob.jsx"

function Nav() {

  function scrollToElement() {
    document.getElementById("footer").scrollIntoView({behavior:'smooth'});
 }

  const [showCartModal, setShowCartModal] = useState(false);
  const [showNavigation, setShowNavigation] = useState(false);

  const handleCartModal = () => {
    setShowCartModal(!showCartModal);
  }

  const handleshowNav = () => {
    setShowNavigation(!showNavigation);
  }


  const CartUI = useSelector((state) => state.cart.cartUI)


  window.addEventListener('scroll', () => {
    const scrollDiv = document.getElementById('navContainer');
    if (window.scrollY > 200) {
      scrollDiv.classList.add('bg-white');
    } else {
      scrollDiv.classList.remove('bg-white');
    }
  });
  return (

    <div id="navContainer" className="bg-nav  w-full sticky  top-0  z-50  " >
      <div className="flex py-3 justify-between px- md:justify-between md:items-center">

        <div className=" px-4 md:ml-24 text-center">
          <img src="/images/res-logo.png" alt="" className=" w-10 md:w-16 m-auto " />
          <p className=" text-red-900 font-bold text-base md:text-2xl">ZWIGATO</p>
        </div>

        <div className="hidden md:block ">
          <ul className="flex gap-6 text-xl">
            <li><NavLink to="/" className="
            hover:text-red-600
             transition aria-[current=page]:text-red-600 aria-[current=page]:no-underline duration-500	">Home</NavLink></li>

            <li><NavLink to="/foods" className=" hover:text-red-600
             transition aria-[current=page]:text-red-600 aria-[current=page]:no-underline duration-500">Foods</NavLink></li>
            <li><NavLink to="/cart">Cart</NavLink></li>
            <li><NavLink to="/" onClick={scrollToElement}> Contact</NavLink></li>
          </ul>
        </div>
        <div className="flex items-center gap-2 md:gap-5 mr-5">
          <div className="flex">
            <button onClick={handleCartModal}><img src="/images/cart.svg" className="w-7 h-9 md:w-9 md:h-10"></img></button>
            <div className=" w-6 h-6 text-white bg-red-500 rounded-full flex items-center justify-center border">{CartUI}</div>
          </div>

          <img src="/images/user-profile.png" alt="" className="w-7 h-6md:w-9 md:h-8"></img>
          <div className='block md:hidden' onClick={handleshowNav}>
            <img src="/images/bars-solid.svg" alt="" className='w-5 h-6 md:w-9 md:h-8' />
          </div>
        </div>

      </div>
      {showNavigation && <NavigationMob handleshowNav={handleshowNav} scrollToElement={scrollToElement} />}
      {showCartModal && <CartModal handleCartModal={handleCartModal} />}


    </div>
  )
}

export default Nav