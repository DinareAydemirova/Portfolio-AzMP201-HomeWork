import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DataForm from './components/Index'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)
  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem("basket")) || [])
  // useEffect(() => {
  //     localStorage.setItem('basket', JSON.stringify(basket))
  //   }, [basket])
  return (
    <>
    <DataForm/>
    
    </>
  )
}

export default App
