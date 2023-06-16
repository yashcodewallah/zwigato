import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from "react-router-dom"
function Cart() {
  const cart=useSelector(state=>state.cart.cart)
  const total=useSelector(state=>state.cart.total)
  if(cart.length===0){
    return <div className='flex justify-center items-center h-60'>
        <p className='text-4xl '>No items to show</p>
    </div>
  }
  return (
    <div className='flex gap-10 flex-col mb-20'>
            <div className='bg-gradient-to-r from-red-300 to-red-800 flex justify-center items-center w-full h-44 '>
                <p className='text-white font-bold text-5xl text-center '>Your Cart</p>
            </div>
   <table className='w-5/6 md:w-3/5 text-center m-auto'>
    <thead>
        <tr>
            <th className=' font-semibold'>Item</th>
            <th className=' font-semibold'>Title</th>
            <th className=' font-semibold'>Price</th>
            <th className=' font-semibold'> Quantity</th>
            <th className=' font-semibold'>Net</th>
        </tr>
    </thead>
    <tbody >
          {cart.map((item)=>{
           return <tr>
                <td><img src={item.image} className='w-8 md:w-10 mt-3 m-auto' /></td>
                <td className='mt-3'>{item.title}</td>
                <td className='mt-3'>{item.price}</td>
                <td className='mt-3'>{item.quantity}</td>
                <td className='mt-3'>{item.quantity * item.price }</td>
            </tr>
          })}
    </tbody>
   </table>
   <div className='w-3/5 m-auto flex  justify-end gap-7'>
    <span className='text-red-600 text-4xl '>$ {total}</span>
    <Link to="/checkout" className='bg-red-600 float-right cursor-pointer 
    flex justify-center items-center
    text-lg p-2 md:px-4 hover:bg-slate-800
    rounded-lg text-white '> Checkout</Link>
   </div>
    </div>
  )
}

export default Cart