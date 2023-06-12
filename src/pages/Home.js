import React from 'react'
import products from '../product';
function Home() {
  return (
    <div className='flex flex-col w-full md:w-10/12 m-auto mt-20 '>
      <div className='flex flex-col md:flex-row  justify-between ' >
        <div data-aos="fade-right" data-aos-easing="ease-out-cubic"
     data-aos-duration="1000" className='text-slate-900 text-lg px-2 md:text-xl font-serif flex-wrap'>
          <p className=' md:text-3xl '>When <span className='text-4xl md:text-8xl text-red-700'>HUNGER</span> strikes, </p>
          <p className=' md:text-4xl text-rock'><span className='text-3xl md:text-5xl font-rock text-red-500'>we're just a </span> few taps away.</p>
          <p className=' text-3xl mt-18'>Order now  <span className='text-red-600'>and</span>  satisfy your cravings</p>
          <div className='flex gap-10 mt-5 text-lg  font-serif'>
            <button className=' bg-red-600 text-white py-2 px-5 duration-300 hover:text-red-600 hover:bg-white hover:border-red-600 hover:border-2'>
              Order now
            </button>
            <button className=' bg-white text-red-600 py-2 px-5 border-red-600  border-2' >
              See all Foods
            </button>
          </div>
          <div className='flex gap-10 text-red-600  text-base mt-5'>
            <p className='flex gap-2 items-center'><img src="/images/check.png" className='w-5'></img>no shipping charge</p>
            <p className='flex gap-2 items-center'><img src="/images/check.png" className='w-5'></img>100% Hygienic food</p>
          </div>
        </div>
        <img data-aos="fade-left"  data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"src="/images/hero.png" alt="" className='w-full md:w-6/12'></img>
      </div>


      <div  className='flex flex-row flex-wrap md:flex-row  gap-5  justify-around md:justify-between w-full'>
        <div data-aos="flip-left"  data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className='flex w-52 items-center gap-4 text-center bg-cardbg p-5 md:pe-20 rounded-lg 
           transition ease-in-out delay-150 md:hover:-translate-y-1 hover:scale-110 cursor-pointer duration-500 ...
           '>

          <img src="/images/hamburger.png" className='' alt="" />

          <p>American Burger</p>
        </div>
        <div data-aos="flip-left"  data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className='flex w-52 items-center gap-4 text-center bg-cardbg p-5 md:pe-20 rounded-lg 
           transition ease-in-out delay-150 md:hover:-translate-y-1 hover:scale-110 cursor-pointer duration-500 ...
           '>
          <img src="/images/hamburger.png" alt="" />
          <p>Italian Pizza</p>
        </div>
        <div data-aos="flip-left"  data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className='w-52 flex items-center gap-4 text-center bg-cardbg p-5 md:pe-20 rounded-lg 
           transition ease-in-out delay-150 md:hover:-translate-y-1 hover:scale-110 cursor-pointer duration-500 ...
           '>
          <img src="/images/hamburger.png" alt="" />
          <p>Indian Biryani</p>
        </div>
        <div data-aos="flip-left"  data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className='w-52 flex items-center gap-4 text-center bg-cardbg p-5 md:pe-20 rounded-lg 
           transition ease-in-out delay-150 md:hover:-translate-y-1 hover:scale-110 cursor-pointer duration-500 ...
           '>
          <img src="/images/hamburger.png" alt="" />
          <p>Chinese</p>
        </div>

      </div>
      <div className='mt-10 mb-10  m-auto '>
        <p className='w-9/12 md:w-7/12 m-auto text-2xl text-center text-blueShade font-bold font-poppins trcaking-wide'>Good <span className='text-5xl text-red-600'>food</span> is all the sweeter when shared with friends. <span className='text-5xl text-red-600'>Order now and enjoy</span> a delicious meal together</p>
        <div className='flex flex-col gap-5 md:flex-row md:justify-between mt-8 items-center w-full '>

          <div className='w-8/12 md:w-3/12 text-normal text-black text-sm  text-slate-700'>
            <img src="/images/service-01.png" className='m-auto  w-36' alt="" />
            <h3 className='font-bold text-2xl  text-center '>Quick Delivery</h3>
            <p className='text-center'>sjacvjvws us ugb gso v UGAO v sbs lan asihna d agdbxk qu bwis bnabibo sgisd </p>
          </div>
          <div className='w-8/12 md:w-3/12 text-normal text-black text-sm  text-slate-700'>
            <img className='m-auto w-36' src="/images/service-02.png" alt="" />
            <h3 className='font-bold text-2xl  text-center '>Super dine in</h3>
            <p className='text-center'>sjacvjvws us ugb gso v UGAO v sbs lan asihna d agdbxk qu bwis bnabibo sgisd </p>
          </div>
          <div className='w-8/12 md:w-3/12 text-normal text-black text-sm  text-slate-700'>
            <img className='m-auto w-36' src="/images/service-03.png" alt="" />
            <h3 className='font-bold text-2xl  text-center '>Easy Pick up</h3>
            <p className='text-center'>sjacvjvws us ugb gso v UGAO v sbs lan asihna d agdbxk qu bwis bnabibo sgisd </p>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" className='mt-10 w-full mb-10 m-auto'>
        <h1 className='text-slate-700 font-bold text-center  text-3xl'> POPULAR FOODS</h1>
        <div className=' bg-red-600  w-full rounded-lg flex flex-wrap gap-4 justify-center  md:gap-11  py-4'>
          <a className=' px-5 py-2 cursor-pointer text-red-600 bg-white text-center flex rounded-md'>All</a>
          <a className=' px-5 py-2 cursor-pointer text-red-600 bg-white text-center flex rounded-md'><img src="/images/hamburger.png" alt="" className=' w-6 mr-2' />Burger</a>
          <a className=' px-5 py-2 text-red-600 cursor-pointer bg-white text-center flex rounded-md'><img src="/images/hamburger.png" alt="" className=' w-6 mr-2' />Pizza</a>
          <a className=' px-5 py-2 text-red-600 bg-white cursor-pointer text-center flex rounded-md'><img src="/images/hamburger.png" alt="" className=' w-6 mr-2' />Biryani</a>
        </div>
      </div>
      <div className='w-full flex flex-col md:flex-row flex-wrap gap-6 justify-between mb-10 mt-10 m-auto'>
        {products.map((product) => {
          return <div data-aos="fade-left" key={product.id} className='flex  shadow-xl bg-white w-full md:w-3/12 border-2 flex-col items-center gap-4  p-8 pb-10'>
            <img className=' w-8/12' src={product.image01}></img>
            <p className='text-slate-700  text-lg font-normal'> {product.title} </p>
            <div className='w-full flex justify-between items-center'>
              <span className='text-red-600 font-bold  text-base'>${product.price}</span>
              <button className='text-center bg-red-600 text-white rounded-md p-2
              transition ease-in-out delay-100 md:hover:-translate-y-1 hover:scale-110 cursor-pointer duration-150 ..'>
                Add to card
                </button>
            </div>
          </div>
        })}

      </div>

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

    </div>
  )
}

export default Home