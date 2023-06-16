import React from 'react'

function Foodcards() {
  return (
    <div>
              <div  className='flex flex-row flex-wrap md:flex-row  gap-5  justify-around md:justify-between w-full'>
        <div data-aos="flip-left"  data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className='flex w-52 items-center gap-4 text-center bg-cardbg p-5 md:pe-20 rounded-lg 
           transition ease-in-out delay-150 md:hover:-translate-y-1 hover:scale-110 cursor-pointer duration-500 ...
           '>

          <img src="/images/burger-food.svg" className='w-20' alt="" />

          <p>American Burger</p>
        </div>
        <div data-aos="flip-left"  data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className='flex w-52 items-center gap-4 text-center bg-cardbg p-5 md:pe-20 rounded-lg 
           transition ease-in-out delay-150 md:hover:-translate-y-1 hover:scale-110 cursor-pointer duration-500 ...
           '>
          <img className='w-20' src="/images/pizza-food.svg" alt="" />
          <p>Italian Pizza</p>
        </div>
        <div data-aos="flip-left"  data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className='w-52 flex items-center gap-4 text-center bg-cardbg p-5 md:pe-20 rounded-lg 
           transition ease-in-out delay-150 md:hover:-translate-y-1 hover:scale-110 cursor-pointer duration-500 ...
           '>
          <img className='text-red-600  w-20' src="/images/indian-food.svg" alt="" />
          <p>Indian Biryani</p>
        </div>
        <div data-aos="flip-left"  data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className='w-52 flex items-center gap-4 text-center bg-cardbg p-5 md:pe-20 rounded-lg 
           transition ease-in-out delay-150 md:hover:-translate-y-1 hover:scale-110 cursor-pointer duration-500 ...
           '>
          <img className='w-20' src="/images/chinese-food.svg" alt="" />
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
    </div>
  )
}

export default Foodcards