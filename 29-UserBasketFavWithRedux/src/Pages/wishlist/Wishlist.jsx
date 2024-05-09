import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromFavs,addToBasket } from '../../redux/slices/cardSlices'

const Wishlist = () => {
const dispatch=useDispatch()
const wishlist=useSelector((state)=>state.card.wishlist)
  return (
    <div className="flex justify-center mr-10">
    <div className="cards container  grid grid-cols-4    h-100">
      {wishlist &&
        wishlist.map((item, index) => (
          <div key={index} className=" h-5/6 m-5 w-30   ">
            <div className="max-w-sm bg-white   border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg w-40 h-40"
                  src={item.image}
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item?.title?.slice(0, 20)}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {item?.description?.slice(0, 90)}
                </p>
                <p className="mb-3 font-bold text-red-500 dark:text-red-500">
                  {item.price}
                </p>
                <h2 className="mb-3 text-gray-700 dark:text-gray-400 font-bold">
                  {`Category:  ${item.category}`}
                </h2>
                <Link
                  href="#"
                  className="inline-flex items-center px-3 py-2 mb-1 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                  onClick={()=>{
                    dispatch(removeFromFavs({id: item.id}))
                  }}
               >
                  remove from wishlist
                 
                </Link>
                <Link
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center mb-1 text-white bg-indigo-500 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                    onClick={() => dispatch(addToBasket(item))}
                 >
                    add to basket
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  </div>
  )
}

export default Wishlist