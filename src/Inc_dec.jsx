import React, { useState } from 'react'

const Inc_dec = () => {

    const [count,setCount]=useState(0);

    const increment =()=>{
        setCount(count+1)
    }

    const decrement=()=>{
        if(count>0){
            setCount(count-1)
        }
    }

    const reset=()=>{
        // setCount(count-count)
        setCount(0)
    }


  return (
    <div>
      <h1>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button><hr/>
        <button onClick={decrement}>Decrement</button><br/>
        <button onClick={reset}>Reset</button>
      </h1>
    </div>
  )
}

export default Inc_dec
