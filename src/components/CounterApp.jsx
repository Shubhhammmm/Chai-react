import React from 'react'
import { useState } from 'react';

const CounterApp = () => {

    const [count, setCount] = useState(0);

    const[like , setLike] = useState(0)
  
    const[dislike , setDislike] = useState(0)
  
    const increaseValue = () => {
      if(count < 20){
        // setCount(count + 1);
        setCount(prevCounter => prevCounter + 1);
        setCount(prevCounter => prevCounter + 1);
      }else{
        setCount(0)
        alert("Cant go beyond 20")
      }
      
    };
  
    const decreseValue = () => {
      if (count > 0) {
        setCount(count - 1);
      } else {
        setCount(0);
        alert(`Cant go beyond ${0}`);
      }
    };
  
    const likes = () =>{
      setLike(like + 1)
  
    }
  
    const dislikes = () =>{
        setDislike(dislike + 1)
    }
  return (

    
    <>
    
    <h3 style={{color : count > 0 ? 'green' : "red"}} >Counter {count} </h3>
      <button onClick={increaseValue}>Increase</button>

      <button onClick={decreseValue}>Decrease</button>
      <br/>

      <button onClick={likes} > Like {like} </button>

      <button onClick={dislikes} > Like {dislike} </button>
      
    </>
  )
}

export default CounterApp
