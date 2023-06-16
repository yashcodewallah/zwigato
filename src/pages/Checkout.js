import React from 'react'
import { useSelector } from 'react-redux'

function Checkout() {
    const total=useSelector(state=>state.cart.total)

  return (
    <div className='w-full mb-24 '>
       <div className='bg-gradient-to-r from-red-300 to-red-800 flex justify-center items-center w-full h-44 '>
        <p className='text-white font-bold text-5xl text-center '>Checkout</p>
        </div>
<div className='flex flex-col md:flex-row gap-20'>
<div className='mt-5 md:absolute md:right-20  md:top-80 flex flex-col p-20 gap-5  rounded-lg bg-cardbg text-2xl'>
<div className='w-full'> Subtotal: <span className='text-red-600 float-right'>${total}</span></div>
<div className='w-full'>Shipping: <span className='text-red-600 float-right'>$30</span></div>
<div className='w-full'>Total:<span className='text-red-600 float-right'>${total+30}</span></div>
</div>
  <form class="w-full md:w-2/5 ml-10 md:ml-28 mt-16 ">
  <div class="mb-4">
    <label for="name" class="block text-gray-700 text-lg mb-2">Name:</label>
    <input type="text" id="name" name="name" class=" px-3 py-2 border-b-2 border-gray-700  rounded focus:outline-none focus:border-blue-500" required />
  </div>
  <div class="mb-4">
    <label for="phone" class="block text-gray-700 text-lg mb-2">Phone Number:</label>
    <input type="tel" id="phone" name="phone" class=" px-3 py-2 border-b-2 rounded focus:outline-none focus:border-blue-500" required />
  </div>
  <div class="mb-4">
    <label for="address" class="block text-gray-700 text-lg mb-2">Shipping Address:</label>
    <textarea id="address" name="address" rows="3" class=" px-3 py-2  border-b-2 rounded focus:outline-none focus:border-blue-500" required></textarea>
  </div>
  <div class="mb-4">
    <label for="email" class="block text-gray-700 text-lg mb-2">Email:</label>
    <input type="email" id="email" name="email" class=" px-3 py-2  border-b-2 rounded focus:outline-none focus:border-blue-500" required />
  </div>
  <button type="submit" class="bg-red-500 md:float-right hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Payment</button>
</form>

</div>
    </div>
  )
}

export default Checkout