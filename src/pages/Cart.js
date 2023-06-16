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
   <table className='w-3/5 text-center m-auto'>
    <thead>
        <tr>
            <th>Item</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Net</th>
        </tr>
    </thead>
    <tbody >
          {cart.map((item)=>{
           return <tr>
                <td><img src="/images/hamburger.png" className=' w-12 m-auto' /></td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.quantity * item.price }</td>
            </tr>
          })}
    </tbody>
   </table>
   <div className='w-3/5 m-auto flex  justify-end gap-7'>
    <span className='text-red-600 text-4xl '>$ {total}</span>
    <Link to="/checkout" className='bg-red-600 float-right cursor-pointer text-lg p-2 px-4 hover:bg-slate-800 rounded-lg text-white '> Checkout</Link>
   </div>
    </div>
  )
}

export default Cart