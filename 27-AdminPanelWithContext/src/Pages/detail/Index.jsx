import React from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const {id}=useParams()
  return (
    <div>product id {id}</div>
  )
}

export default Detail