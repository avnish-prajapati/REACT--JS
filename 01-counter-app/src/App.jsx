
import './App.css';
import { useState } from 'react';

const  App = () => {

  const [count,setCount] = useState(0)
  return ( <div className='vh-100 w-100 d-flex flex-column justify-content-center align-items-center'>
  <h1>{count}</h1>
  <div>
    <button onClick={()=>{setCount(count+1)}} className='btn btn-outline-primary shadow m-4'>Addition</button>
  <button onClick={()=>{setCount(count-1)}}className='btn btn-outline-danger shadow m-4'>Substraction</button>
  <button onClick={()=>{setCount(count*2)}} className='btn btn-outline-success shadow m-4'>Multiplication</button>
  <button onClick={()=>{setCount(count/21)}}className='btn btn-outline-warning shadow m-4'>Divisionn</button>
  <button onClick={()=>{setCount(0)}}className='btn btn-outline-dark shadow m-4'>Reset</button>
  </div>
  </div>)

 
}



export default App
