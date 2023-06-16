import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../store/cart/cartSlice';
import { Link } from 'react-router-dom';
function CartModal({handleCartModal}) {
const cart=useSelector(state=>state.cart.cart);
const total=useSelector(state=>state.cart.total);
const dispatch=useDispatch()

const CartItems=()=>{
   return  <div>
    {cart.map((product,ind)=>{
    return <div key={ind} className='flex justify-between items-center'>
     <img src={product.image} className=' w-10'></img>
     <div className='flex flex-col items-center'>
     <h3 className='font-semibold text-center w-full'>{product.title}</h3>
     <div className='flex w-24 justify-between items-center'>
     <p className='text-slate-700 text-sm'>x{product.quantity}</p>
     <p className='text-red-600 font-bold'>${product.price}</p>
     </div>
     <div className='flex gap-10 text-bold text-lg p-2 rounded-xl bg-cardbg '>
       <button onClick={()=>dispatch(cartActions.decreaseQuantity(product))} >-</button>
       <p>{product.quantity}</p>
       <button onClick={()=>dispatch(cartActions.addItem(product))}>+</button>
     </div>
     </div>
     <button onClick={()=>dispatch(cartActions.removeItem(product))}><img src="/images/redError.png" alt="" className='w-8'/></button>
</div>
   })}
    </div>
}


  return (
    <div className='absolute top-0 left-0 bottom-0 z-20 bg-cartbg  w-screen h-screen'>
    <div className='w-full md:w-5/12 h-full fixed bg-white flex flex-col'>
    <div className='p-4'>
    <button className='w-auto' onClick={()=>handleCartModal()} ><img src="/images/error.png" alt="" className='w-8'></img></button>
    </div>
<div className='flex gap-8 overflow-y-scroll flex-col mt-4 mb-20 p-6  '>
 
 { cart.length===0 ? <div className='text-center font-bold text-slate-700 text-2xl'>No Items to show</div> : <CartItems /> }

   </div>

<div className='w-full flex py-4 text-white bg-red-600 absolute left-0 bottom-0 items-center px-5 gap-4  justify-between'>
    <div><p className='text-lg md:text-xl text-white '>subtotal</p><span className='text-xl md:text-3xl font-bold '> ${total}</span>
    </div>
    <Link to="/checkout" onClick={handleCartModal} className='bg-white text-slate-800 font-bold text-lg px-1 md:text-xl  md:px-2 py-1 rounded-lg  justify-self-end'>
        Checkout
    </Link>
</div>

 </div>
 </div>
  )
}

export default CartModal