import React from 'react'

const Secondcomponent = (props) => {
  const [zero,one,two,three,four,five,six,seven,eight,nine] = props.fruits
  return (
    <div>
      <h1>This is second component</h1>
      <h1>{zero}</h1>
      <h1>{one}</h1>
      <h1>{two}</h1>
      <h1>{three}</h1>
      <h1>{four}</h1>
      <h1>{five}</h1>
      <h1>{six}</h1>
      <h1>{seven}</h1>
      <h1>{eight}</h1>
      <h1>{nine}</h1>

    </div>
  )
}

export default Secondcomponent
