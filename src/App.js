import React from 'react';
import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  let initialCount = 0;
  let initialID = 0;
  let initialData = {};
  const [count, setCount] = useState(initialCount);
  const [data, setData] = useState(initialData)
  const [ID, setID] = useState(initialID);


  const getData = async ()=>{
    let res;
    
    try {
      res = await axios.get(
        'https://5e08d2b9434a370014168d82.mockapi.io/test/',
        {
        params:{
          ID:ID
        }
      })
      res = await res.json();
      console.log(res,'await')

    }catch(e){
      console.log(e)
    }
}
  

  useEffect(()=>{
    
    setData(getData(ID));
    console.log(data,'after set data')
    
    
  },[data])

  const handleInput = (e)=>{
    console.log(Number(e.target.value));
    setCount(Number(e.target.value));
  }
  const handleId=(e)=>{
    console.log(e.target.value,'test id')
    setID(Number(e.target.value));
  }

  return (
    <div className="App">
      <span>{count}</span>
      <input onChange={handleInput}></input> 
      <button onClick={()=>setCount(count+1)}>
        Click
        </button> 
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      <div>
        <label>
          set id:
        <input onChange={handleId}>
         
        </input>
        </label>
      </div>
      <div className="data">
        {data.id}
      </div>
    </div>
  );
}

export default App;
