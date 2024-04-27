import React ,{useState}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from './Table/Index';

const DataForm = () => {
    let [datas, setDatas]=useState([])

  return (
    <>
  
    <DataTable/>
    </>
  )
}

export default DataForm