import React, { useEffect } from 'react'
import { getAllData } from '../../services'
import { endPoints } from '../../services/api'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts, setUsers } from '../../redux/slices/mainSlice'
import { useSearchParams } from 'react-router-dom'

const Dashboard = () => {
  const dispatch=useDispatch()
  const products=useSelector((state)=>state.products.products)
  const users=useSelector((state)=>state.users.users)

    useEffect(() => {
        getAllData(endPoints.users).then((data) => {
          dispatch(setUsers(data));
        });
      }, []);

      useEffect(() => {
        getAllData(endPoints.products).then((data) => {
          dispatch(setProducts(data));
          
        });
      }, []);
  return (
    <>
    {/* component */}
    <link
      rel="stylesheet"
      href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
    />
    <link
      rel="stylesheet"
      href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
    />
    <div className="flex flex-wrap bg-indigo-500 ">
      <div className=" m-4 w-full lg:w-6/12 xl:w-3/12 px-5">
        <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-4 xl:mb-0 shadow-lg">
          <div className="flex-auto p-4">
            <div className="flex flex-wrap">
              <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                  Products
                </h5>
                <span className="font-semibold text-xl text-blueGray-700">
                 {products.length}
                </span>
              </div>
              <div className="relative w-auto pl-4 flex-initial">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-pink-500">
                  <i className="fas fa-chart-pie" />
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
      <div className="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5">
        <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
          <div className="flex-auto p-4">
            <div className="flex flex-wrap">
              <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                  Users
                </h5>
                <span className="font-semibold text-xl text-blueGray-700">
                  {users.length}
                </span>
              </div>
              <div className="relative w-auto pl-4 flex-initial">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-lightBlue-500">
                  <i className="fas fa-users" />
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    
    </div>
  
  </>
  
  )
}

export default Dashboard