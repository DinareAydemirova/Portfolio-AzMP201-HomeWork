import React from 'react'
import './input.css'

const Input = () => {
  return (
    <div className='search'>
        <input type="text"  placeholder='Search GitHub username...'/>
        <button>search</button>
    </div>
  )
}

export default Input