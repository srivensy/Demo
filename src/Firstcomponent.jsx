import React from 'react'

const Firstcomponent = (props) => {
  // props destructuring
  const {id,name,branch,place}=props.student
  return (
    <div>
      <h1>This first component</h1>
      {/* props without destructuring */}
      
      {/* <h1>{props.student.id}</h1>
      <h1>{props.student.name}</h1>
      <h1>{props.student.branch}</h1>
      <h1>{props.student.place}</h1> */}

      <h1>ID:{id}</h1>
      <h1>Name:{name}</h1>
      <h1>Branch:{branch}</h1>
      <h1>Place:{place}</h1>
    </div>
  )
}

export default Firstcomponent
