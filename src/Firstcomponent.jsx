import React from 'react'

const Firstcomponent = ({id,name,branch,place}) => {

    // var [id,name,branch,place] = props.object
    // console.log(object)
    // debugger
  return (
    <div>
      <h1>This first component</h1>
      <h2>{id}</h2>
      <p>{name}</p>
      <p>{branch}</p>
      <p>{place}</p>
    </div>
  )
}

export default Firstcomponent
