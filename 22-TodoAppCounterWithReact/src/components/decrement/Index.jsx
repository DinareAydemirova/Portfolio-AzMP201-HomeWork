import React from 'react'
import '../decrement/style.css'
const Decrement = ({count, setCount}) => {
  return (
   
        <button className='decBtn' onClick={()=>{
            setCount(--count)
        }}>-</button>
    
  )
}

export default Decrement