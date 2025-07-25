import React from 'react'

// import { User_info } from './Userdata'

import { User_Info } from './Userdata'

const Getdata = () => {
    console.log(User_Info)
    // https://jsonplaceholder.typicode.com/
  return (
    <div>
        {
            User_Info.map((item,index)=>(
                <ul key={index}>
                    <h1 style={{color:"red"}}>userId:{item.userId}</h1>
                    <h2 style={{color:"green"}}>id:{item.id}</h2>
                    <h3 style={{color:"#8B008B"}}>title:{item.title}</h3>
                    <h4 style={{color:"#FF1493"}}>body:{item.body}</h4>

                </ul>
            ))
        }
    </div>
  )
}

export default Getdata
