import React from 'react'
import { NavLink } from 'react-router-dom'
function NavigationMob(props) {
  return (
    <div className='absolute top-0 left-0 bottom-0 z-20 bg-cartbg  w-screen h-screen' onClick={props.handleshowNav}>
        <div className=' absolute h-full w-36 bg-white text-red-600 '>
          <ul className="flex flex-col h-full justify-center items-center  gap-6 text-xl">
            <li><NavLink  to="/" onClick={props.handleshowNav} className="
            hover:text-red-600
             transition aria-[current=page]:text-red-600 aria-[current=page]:no-underline duration-500	">Home</NavLink ></li>

            <li><NavLink to="/foods" onClick={props.handleshowNav} className=" hover:text-red-600
             transition aria-[current=page]:text-red-600 aria-[current=page]:no-underline duration-500">Foods</NavLink ></li>
            <li><NavLink  to="/cart" onClick={props.handleshowNav} >Cart</NavLink ></li>
            <li><NavLink to="/" onClick={()=>{
              props.handleshowNav()
            props.scrollToElement()
            }}>Contact</NavLink ></li>
          </ul>
        </div>
    </div>
  )
}

export default NavigationMob