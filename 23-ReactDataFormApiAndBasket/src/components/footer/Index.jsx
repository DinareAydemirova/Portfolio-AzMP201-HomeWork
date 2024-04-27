import React from 'react'
import SetDataLi from '../SetDataLi/Index'

const Footer = ({datas, setDatas}) => {
  return (
    <ul>
        {datas.map((elem, i)=>{
            return <SetDataLi key={i} data={elem} datas={datas} setDatas={setDatas}/>
        })}
    </ul>
  )
}

export default Footer