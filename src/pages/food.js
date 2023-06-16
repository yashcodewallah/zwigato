import React, { useEffect, useState } from 'react'
import products from '../product'
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart/cartSlice';



function Food() {

    const [searchTerm, setSearchTerm] = useState("");
    const [searchedProduct, setSearchedProduct] = useState(products)
    const dispatch = useDispatch()
    const [pageNumber, setPageNumber] = useState(0);

    const [abc, setAbc] = useState("")

    console.log(pageNumber);

    useEffect(() => {
        console.log("logged");
        const searchingProduct = products.filter((item) => {
            if (searchTerm === "") {
                return item;
            }
            if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                return item;
            }
        });
        setSearchedProduct(searchingProduct)
    }, [searchTerm])

    const productPerPage = 12;
    const visitedPage = pageNumber * productPerPage;

    const displayPage = searchedProduct.slice(
        visitedPage,
        visitedPage + productPerPage
    );


    const CardComponent = () => {
        return <div className='flex justify-around w-full m-auto flex-wrap gap-6'>
            {displayPage.map((product) => {
                return <div data-aos="fade-down" key={product.id} className='flex  shadow-xl bg-white w-full md:w-1/5 border-2 flex-col items-center gap-4  p-8 pb-10'>
                    <img className=' w-8/12' src={product.image01}></img>
                    <p className='text-slate-700  text-lg font-normal'> {product.title} </p>
                    <div className='w-full flex justify-between items-center'>
                        <span className='text-red-600 font-bold  text-base'>${product.price}</span>
                        <button className='text-center bg-red-600 text-white rounded-md p-2
                    transition
                     ease-in-out 
                     delay-100 
                     md:hover:-translate-y-1 hover:scale-110 cursor-pointer duration-150 ..'
                            onClick={() => dispatch(cartActions.addItem({
                                id: product.id,
                                title: product.title,
                                price: product.price,
                                image: product.image01,
                            }))}
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            })}
        </div>
    }




    const pageCount = Math.ceil(searchedProduct.length / productPerPage);

    return (
        <div className='w-full'>
            <div className='bg-gradient-to-r from-red-300 to-red-800 flex justify-center items-center w-full h-44 '>
                <p className='text-white font-bold text-5xl text-center '>Foods</p>
            </div>
            <div className='flex flex-col justify-around m-auto w-5/6 flex-wrap gap-6 mt-20'>

                <div className='w-full flex justify-between '>
                    <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="what you are looking for ?" className='border-black border-2 rounded-lg w-50 text-base px-2 '></input>

                </div>
                <CardComponent />


                <div className=' h-10  self-center px-4 flex justify-center bg-slate-600 rounded-lg items-center mb-10 p-5 text-base '>
                    <button className='text-lg p-2 disabled:opacity-70  text-center text-white'
                        disabled={pageNumber === 0}
                        onClick={() => { setPageNumber(pageNumber - 1) }}>previous</button>
                    <p className='text-lg p-2 text-center text-red-600 font-bold  '>{pageNumber + 1}</p>
                    <button className='text-lg p-2  text-center text-white'
                        disabled={pageNumber === pageCount - 1} onClick={() => { setPageNumber(pageNumber + 1) }}>next</button>
                </div>

            </div>

        </div>
    )
}

export default Food