import React from 'react'
import Truecomponent from './Truecomponent'
import Falsecomponent from './Falsecomponent'

const Ternaryoperator = () => {
  return (
    <div>
      <h1>Ternary operator</h1>
      {10 > 20? <Truecomponent/>:<Falsecomponent/>}
    </div>
  )
}

export default Ternaryoperator;
