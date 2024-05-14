import React from "react";
import "../profile/Style.css";

const Profile = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.4.6/tailwind.min.css"
      />
  
        <div className="lg:w-8/12 lg:mx-auto mb-8">
          <header className="flex flex-wrap items-center p-4 md:py-8">
            <div className="md:w-3/12 md:ml-16">
              {/* profile image */}
              <img
                className="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full
               border-2 border-pink-600 p-1"
                src="https://t3.ftcdn.net/jpg/02/45/68/40/360_F_245684006_e55tOria5okQtKmiLLbY30NgEHTIB0Og.jpg"
                alt="profile"
              />
            </div>
            {/* profile meta */}
            <div className="w-8/12 md:w-7/12 ml-4">
              <div className="md:flex md:flex-wrap md:items-center mb-4">
                <h2 className="text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0">
                  bytewebster
                </h2>
                {/* badge */}
                <span
                  className="inline-block fas fa-certificate fa-lg text-blue-500 
                         relative mr-6  text-xl transform -translate-y-2"
                  aria-hidden="true"
                >
                  <i
                    className="fas fa-check text-white text-xs absolute inset-x-0
                         ml-1 mt-px"
                  />
                </span>
                {/* follow button */}
                <a
                  href="#"
                  className="bg-blue-500 px-2 py-1 
                  text-white font-semibold text-sm rounded block text-center 
                  sm:inline-block block"
                >
                  Follow
                </a>
              </div>
              {/* post, following, followers list for medium screens */}
              <ul className="hidden md:flex space-x-8 mb-4">
                <li>
                  <span className="font-semibold">6</span>
                  posts
                </li>
                <li>
                  <span className="font-semibold">50.5k</span>
                  followers
                </li>
                <li>
                  <span className="font-semibold">10</span>
                  following
                </li>
              </ul>
              {/* user meta form medium screens */}
              <div className="hidden md:block">
                <h1 className="font-semibold">ByteWebster</h1>
                <span className="bioclass">Internet company</span>
                <p>
                  ByteWebster is a web development and coding blog website.
                  Where we provide professional web projects🌍
                </p>
                <span>
                  <strong>www.bytewebster.com</strong>
                </span>
              </div>
            </div>
            {/* user meta form small screens */}
            <div className="md:hidden text-sm my-2">
              <h1 className="font-semibold">ByteWebster</h1>
              <span className="bioclass">Internet company</span>
              <p>
                ByteWebster is a web development and coding blog website. Where
                we provide professional web projects🌍
              </p>
              <span>
                <strong>www.bytewebster.com</strong>
              </span>
            </div>
          </header>
          {/* posts */}
          <div className="px-px md:px-3">
            {/* user following for mobile only */}
            <ul
              className="flex md:hidden justify-around space-x-8 border-t 
          text-center p-2 text-gray-600 leading-snug text-sm"
            >
              <li>
                <span className="font-semibold text-gray-800 block">6</span>
                posts
              </li>
              <li>
                <span className="font-semibold text-gray-800 block">50.5k</span>
                followers
              </li>
              <li>
                <span className="font-semibold text-gray-800 block">10</span>
                following
              </li>
            </ul>
            <br />
            <br />
            {/* insta freatures */}
            <ul
              className="flex items-center justify-around md:justify-center space-x-12  
              uppercase tracking-widest font-semibold text-xs text-gray-600
              border-t"
            >
              {/* posts tab is active */}
              <li className="md:border-t md:border-gray-700 md:-mt-px md:text-gray-700">
                <a className="inline-block p-3" href="#">
                  <i className="fas fa-th-large text-xl md:text-xs" />
                  <span className="hidden md:inline">post</span>
                </a>
              </li>
              <li>
                <a className="inline-block p-3" href="#">
                  <i className="far fa-square text-xl md:text-xs" />
                  <span className="hidden md:inline">igtv</span>
                </a>
              </li>
              <li>
                <a className="inline-block p-3" href="#">
                  <i
                    className="fas fa-user border border-gray-500
                       px-1 pt-1 rounded text-xl md:text-xs"
                  />
                  <span className="hidden md:inline">tagged</span>
                </a>
              </li>
            </ul>
            {/* flexbox grid */}
            <div className="flex flex-wrap -mx-px md:-mx-3">
              {/* column */}
              <div className="w-1/3 p-px md:px-3">
                {/* post 1*/}
                <a href="#">
                  <article className="post bg-gray-100 text-white relative pb-full md:mb-6">
                    {/* post images*/}
                    <img
                      className="w-full h-full absolute left-0 top-0 object-cover"
                      src="https://images.pexels.com/photos/586687/pexels-photo-586687.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt="image"
                    />
                    
                    {/* overlay*/}
                    <div
                      className="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                          left-0 top-0 hidden"
                    >
                      <div
                        className="flex justify-center items-center 
                              space-x-4 h-full"
                      >
                        <span className="p-2">
                          <i className="fas fa-heart" />
                          412K
                        </span>
                        <span className="p-2">
                          <i className="fas fa-comment" />
                          2,909
                        </span>
                      </div>
                    </div>
                  </article>
                </a>
              </div>
              <div className="w-1/3 p-px md:px-3">
                <a href="#">
                  {/* post 2 */}
                  <article className="post bg-gray-100 text-white relative pb-full md:mb-6">
                    <img
                      className="w-full h-full absolute left-0 top-0 object-cover"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Hot_air_balloon_over_a_pagoda_in_Bagan.jpg/1200px-Hot_air_balloon_over_a_pagoda_in_Bagan.jpg"
                      alt="image"
                    />
                    {/* overlay*/}
                    <div
                      className="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                          left-0 top-0 hidden"
                    >
                      <div
                        className="flex justify-center items-center 
                              space-x-4 h-full"
                      >
                        <span className="p-2">
                          <i className="fas fa-heart" />
                          412K
                        </span>
                        <span className="p-2">
                          <i className="fas fa-comment" />
                          1,993
                        </span>
                      </div>
                    </div>
                  </article>
                </a>
              </div>
              <div className="w-1/3 p-px md:px-3">
                <a href="#">
                  <article className="post bg-gray-100 text-white relative pb-full  md:mb-6">
                    <img
                      className="w-full h-full absolute left-0 top-0 object-cover"
                      src="https://iso.500px.com/wp-content/uploads/2016/01/sanfrancisco_cover.jpg"
                      alt="image"
                    />
                    {/* overlay*/}
                    <div
                      className="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                          left-0 top-0 hidden"
                    >
                      <div
                        className="flex justify-center items-center 
                              space-x-4 h-full"
                      >
                        <span className="p-2">
                          <i className="fas fa-heart" />
                          112K
                        </span>
                        <span className="p-2">
                          <i className="fas fa-comment" />
                          2,090
                        </span>
                      </div>
                    </div>
                  </article>
                </a>
              </div>
              <div className="w-1/3 p-px md:px-3">
                <a href="#">
                  <article className="post bg-gray-100 text-white relative pb-full md:mb-6">
                    <img
                      className="w-full h-full absolute left-0 top-0 object-cover"
                      src="https://t4.ftcdn.net/jpg/02/08/71/71/360_F_208717161_iayf8iiGOYIMhF2QkUv0woVLBriF9hkh.jpg"
                      alt="image"
                    />
                    {/* overlay*/}
                    <div
                      className="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                          left-0 top-0 hidden"
                    >
                      <div
                        className="flex justify-center items-center 
                              space-x-4 h-full"
                      >
                        <span className="p-2">
                          <i className="fas fa-heart" />
                          841K
                        </span>
                        <span className="p-2">
                          <i className="fas fa-comment" />
                          909
                        </span>
                      </div>
                    </div>
                  </article>
                </a>
              </div>
              <div className="w-1/3 p-px md:px-3">
                <a href="#">
                  <article className="post bg-gray-100 text-white relative pb-full md:mb-6">
                    <img
                      className="w-full h-full absolute left-0 top-0 object-cover"
                      src="https://vietnam.travel/sites/default/files/styles/article_photo_large/public/2022-11/315500848_120936280813874_4911556240332041949_n.jpg?itok=9nQ4bSQU"
                      alt="image"
                    />
                    {/* overlay*/}
                    <div
                      className="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                          left-0 top-0 hidden"
                    >
                      <div
                        className="flex justify-center items-center 
                              space-x-4 h-full"
                      >
                        <span className="p-2">
                          <i className="fas fa-heart" />
                          120K
                        </span>
                        <span className="p-2">
                          <i className="fas fa-comment" />
                          3,909
                        </span>
                      </div>
                    </div>
                  </article>
                </a>
              </div>
              <div className="w-1/3 p-px md:px-3">
                <a href="#">
                  <article className="post bg-gray-100 text-white relative pb-full md:mb-6">
                    <img
                      className="w-full h-full absolute left-0 top-0 object-cover"
                      src="https://www.itsjustlight.com/wp-content/uploads/2015/10/Copenhagen-Denmark-Travel-Photography.jpg"
                      alt="image"
                    />
                    {/* overlay*/}
                    <div
                      className="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute 
                          left-0 top-0 hidden"
                    >
                      <div
                        className="flex justify-center items-center 
                              space-x-4 h-full"
                      >
                        <span className="p-2">
                          <i className="fas fa-heart" />
                          160K
                        </span>
                        <span className="p-2">
                          <i className="fas fa-comment" />
                          5,557
                        </span>
                      </div>
                    </div>
                  </article>
                </a>
              </div>
            </div>
          </div>
        </div>
     
    </>
  );
};

export default Profile;
