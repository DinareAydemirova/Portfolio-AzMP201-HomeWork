import React from 'react'
import '../increment/style.css'

const Increment = ({count ,setCount}) => {
  return (
    <button className='incBtn' onClick={()=>{
      setCount(++count)
    }}>
      +
    </button>
  )
}

export default Increment