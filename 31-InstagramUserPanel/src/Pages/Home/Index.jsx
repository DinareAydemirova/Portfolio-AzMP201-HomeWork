import React from 'react'

const Home = () => {
  return (
    <>
    <meta charSet="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Instagram UI</title>
    {/* Favicon */}
    <link
      rel="shortcut icon"
      href="./public/images/favicon.ico"
      type="image/x-icon"
    />
    {/* Tailwind Output dist */}
    <link rel="stylesheet" href="./dist/assets/index-c9840938.css" />
    {/* CSS */}
    {/* <link rel="stylesheet" href="./main.css"> */}
    {/* Header */}
  
    <hr className="border-gray-700" />
    {/* Stories */}
    <div className="container m-auto px-60 ">
    <section className="my-3 px-3 flex space-x-2 items-center overscroll-auto overflow-x-auto py-6">
      <div className="flex flex-col justify-center items-center">
        <div className="relative">
          <img
            src="https://i.insider.com/5a271fbc7101ad7b9647b9d7?width=800&format=jpeg&auto=webp"
            alt="sudharsan"
            className="w-16 rounded-full"
          />
          <div className="absolute top-11 left-12 rounded-full bg-white cursor-pointer">
            <svg
              aria-label="Plus icon"
              className="x1lliihq x1n2onr6 text-black"
              color="rgb(0, 149, 246)"
              fill="rgb(0, 149, 246)"
              height={16}
              role="img"
              viewBox="0 0 24 24"
              width={16}
            >
              <title>Add Story</title>
              <path d="M12.001.504a11.5 11.5 0 1 0 11.5 11.5 11.513 11.513 0 0 0-11.5-11.5Zm5 12.5h-4v4a1 1 0 0 1-2 0v-4h-4a1 1 0 1 1 0-2h4v-4a1 1 0 1 1 2 0v4h4a1 1 0 0 1 0 2Z"></path>
            </svg>
          </div>
        </div>
        <span className="text-xs text-black mt-1 font-semibold">
          Your Story
        </span>
      </div>
     
      <div className="flex flex-col justify-center items-center">
        <img
          src="https://cdn.britannica.com/88/158788-050-314EBC88/Mount-Triumph-height-North-Cascades-National-Park.jpg"
          alt="sri-shankar"
          className="w-16 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-0.5 "
        />
        <span className="text-xs text-black mt-1 font-semibold">
          srishankar
        </span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img
          src="https://cdn.britannica.com/88/158788-050-314EBC88/Mount-Triumph-height-North-Cascades-National-Park.jpg"
          alt="madan-gowri"
          className="w-16 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-0.5 "
        />
        <span className="text-xs text-black mt-1 font-semibold">
          madangowri
        </span>
      </div>
      
    </section>
    {/* Posts */}
    <section className='flex items-center justify-center w-full h-screen'>
    <div className="my-3 px-3 text-white">
      <div className="flex items-center justify-between space-x-4">
        <div className="flex items-center space-x-2">
          <img
            src="https://cdn.britannica.com/88/158788-050-314EBC88/Mount-Triumph-height-North-Cascades-National-Park.jpg"
            alt="millionaires-formula"
            className="w-10 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-0.5"
          />
          <h6 className="font-medium text-sm text-black">millionairesformula</h6>
          <span className="text-gray-500 text-2xl">·</span>
          <span className="text-gray-500 text-xs">3 m</span>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={25}
            height={25}
            viewBox="0 0 256 256"
            className="text-gray-200 fill-current cursor-pointer hover:text-white"
          >
            <path d="M112 60a16 16 0 1 1 16 16a16 16 0 0 1-16-16Zm16 52a16 16 0 1 0 16 16a16 16 0 0 0-16-16Zm0 68a16 16 0 1 0 16 16a16 16 0 0 0-16-16Z" />
          </svg>
        </div>
      </div>
      <div className="py-3">
        <img src="https://i.insider.com/5a271fbc7101ad7b9647b9d7?width=800&format=jpeg&auto=webp" alt="meme-1" className="rounded" />
      </div>
      {/* Like Sections */}
      <div className="flex justify-between w-full ">
        <div className="flex space-x-4">
          <svg
            aria-label="Like"
            className="x1lliihq x1n2onr6 cursor-pointer hover:fill-red-500 text-black"
            height={24}
            role="img"
            viewBox="0 0 24 24"
            width={24}
          >
            <title>Like</title>
            <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
          </svg>
          <svg
            aria-label="Comment"
            className="x1lliihq x1n2onr6 cursor-pointer hover:text-black-400 text-black"
            color="rgb(245, 245, 245)"
            fill="rgb(245, 245, 245)"
            height={24}
            role="img"
            viewBox="0 0 24 24"
            width={24}
          >
            <title>Comment</title>
            <path
              d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
          <svg
            aria-label="Share Post"
            className="x1lliihq x1n2onr6 cursor-pointer hover:text-black-400 text-black"
            color="rgb(245, 245, 245)"
            fill="rgb(245, 245, 245)"
            height={24}
            role="img"
            viewBox="0 0 24 24"
            width={24}
          >
            <title>Share Post</title>
            <line
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth={2}
              x1={22}
              x2="9.218"
              y1={3}
              y2="10.083"
            />
            <polygon
              fill="none"
              points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
        </div>
        <div>
          <svg
            aria-label="Save"
            className="x1lliihq x1n2onr6 cursor-pointer text-black"
            color="rgb(245, 245, 245)"
            fill="rgb(245, 245, 245)"
            height={24}
            role="img"
            viewBox="0 0 24 24"
            width={24}
          >
            <title>Save</title>
            <polygon
              fill="none"
              points="20 21 12 13.44 4 21 4 3 20 3 20 21"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
        </div>
      </div>
      <div className="my-2 font-medium text-sm text-black">4,047 likes</div>
   
      <div className="text-sm  py-2 cursor-pointer text-black">
        View all 13 comments
      </div>
    </div>
    <hr className="border-gray-700" />
    
    </section>
   
   
    {/* Footer */}
    </div>
   
  
  </>
  
  
  

  )
}

export default Home