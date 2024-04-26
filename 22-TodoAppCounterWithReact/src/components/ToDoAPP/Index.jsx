import React , {useState}from 'react'
import Header from './components/Header'
import Footer from './components/Footer';
import '../ToDoAPP/style.css'

const ToDoAPP = () => {
    function getData(data){
        console.log(data);
    }
    let [todos, setTodos] = useState([]);
console.log(todos);
  return (
    <div className='todo'>
      <h2>ToDo App</h2>
        <Header todos={todos} setTodos={setTodos}/>
       <Footer getData={getData} todos={todos} setTodos={setTodos}/>
       
    </div>
  )
}

export default ToDoAPP