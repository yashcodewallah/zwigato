import React from 'react'
import products from '../product';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart/cartSlice';
function Menu() {

const dispatch=useDispatch();

  return (
    <div>
              <div data-aos="fade-down" className='mt-10 w-full mb-10 m-auto'>
        <h1 className='text-slate-700 font-bold text-center  text-3xl'> POPULAR FOODS</h1>
        <div className=' bg-red-600  w-full rounded-lg flex flex-wrap gap-4 justify-center  md:gap-11  py-4'>
          <a className=' px-5 py-2 cursor-pointer text-red-600 bg-white text-center flex rounded-md'>All</a>
          <a className=' px-5 py-2 cursor-pointer text-red-600 bg-white text-center flex rounded-md'><img src="/images/hamburger.png" alt="" className=' w-6 mr-2' />Burger</a>
          <a className=' px-5 py-2 text-red-600 cursor-pointer bg-white text-center flex rounded-md'><img src="/images/pizza.png" alt="" className=' w-6 mr-2' />Pizza</a>
          <a className=' px-5 py-2 text-red-600 bg-white cursor-pointer text-center flex rounded-md'><img src="/images/bread.png" alt="" className=' w-6 mr-2' />Bread</a>
        </div>
      </div>
      <div className='w-full flex flex-col md:flex-row flex-wrap gap-6 justify-between mb-10 mt-10 m-auto'>
        {products.map((product) => {
          return <div data-aos="fade-down" key={product.id} className='flex  shadow-xl bg-white w-full md:w-3/12 border-2 flex-col items-center gap-4  p-8 pb-10'>
            <img className=' w-8/12' src={product.image01}></img>
            <p className='text-slate-700  text-lg font-normal'> {product.title} </p>
            <div className='w-full flex justify-between items-center'>
              <span className='text-red-600 font-bold  text-base'>${product.price}</span>
              <button className='text-center bg-red-600 text-white rounded-md p-2
              transition ease-in-out delay-100 md:hover:-translate-y-1 hover:scale-110 cursor-pointer duration-150 ..'
              onClick={()=>dispatch(cartActions.addItem({
                id:product.id,
                title:product.title,
                price:product.price,
                image:product.image01
              }))}
              >
                Add to cart
                </button>
            </div>
          </div>
        })}

      </div>
    </div>
  )
}

export default Menu