import React from 'react'

const Obj = (name) => {
    console.log(name)
  return (
    <div>
      <h1>{name.id}</h1>
      <h1>id is:{name.id}</h1>
      <h1>name is:{name.name}</h1>
      <h1>designation is:{name.designation}</h1>
    </div>
  )
}

export default Obj
