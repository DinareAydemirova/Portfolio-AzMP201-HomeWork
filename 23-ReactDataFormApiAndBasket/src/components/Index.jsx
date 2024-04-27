import React ,{useState}from 'react'
import Header from './header/Index'
import Footer from './footer/Index'
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from './Table/Index';

const DataForm = () => {
    let [datas, setDatas]=useState([])

  return (
    <>
    <Header datas={datas} setDatas={setDatas}/>
    <Footer datas={datas} setDatas={setDatas}/>
    <DataTable/>
    </>
  )
}

export default DataForm