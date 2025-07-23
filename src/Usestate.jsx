import React, { useEffect } from 'react'
import { useState } from 'react'

const Usestate = () => {
    const [place,setPlace] = useState('Bengalore');

    useEffect(()=>{
        if(place === 'Madanapalle'){
            setPlace('Bhagya')
        }else{
            setPlace('Geethanjali')
        }
    },[])

  return (
    <div>
      <h1>My place is: {place}</h1>
    </div>
  )
}

export default Usestate
