import React from 'react'
import '../count/style.css'

const Count = ({count}) => {
  return (
    <div className='count'>
       {count}
    </div>
  )
}

export default Count