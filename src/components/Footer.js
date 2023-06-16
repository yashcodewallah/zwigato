import React from 'react'

function Footer() {
  return (
    <div id="footer" className='bg-cardbg pt-10 pb-10'>
    <div className='w-10/12 m-auto  md:items-center gap-5 flex flex-col md:flex-wrap flex-wrap md:flex-row justify-between'>
        <div className='flex w-full md:w-4/12 items-center flex-col gap-2 '>
            <img src="/images/res-logo.png" className='w-16 m-auto' alt="" ></img>
            <p className='text-center text-slate-900 text-4xl font-bold'>Zwigato</p>
            <p className='text-slate-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt pariatur accusamus</p>
        </div>
        <div>
            <div className='flex flex-col items-start'>
            <p className='text-center text-slate-900 text-base font-bold'>Contact</p>
        <p className='text-slate-600'>Location : Delhi,India</p>
        
        <p className='text-center text-slate-900 text-base font-bold'>Phone: 9310135866</p>
        <p className='text-center text-slate-900 text-base font-bold'>Email :  sharmayash380@gmail.com</p>
            </div>
            </div>
    <div className='flex flex-col items-start'>
    <p className='text-center text-slate-900 underline text-base font-bold'>Delivery Time</p>
    <p className='text-center text-slate-900 text-base font-bold'>Sunday - Thursday</p>
    <p>10:00 am - 11:00 pm</p>
    <p className='text-center text-slate-900 text-base font-bold'>Delivery Time</p>
    <p >Off day</p>
    </div>

    </div>

    <div className='text-center'>
        <p className='text-red-600'>@copywrite Reserved 2023</p>
    </div>
    </div>
  )
}

export default Footer