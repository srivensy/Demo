import React, { useState } from 'react'
import './App.css'

const RegistrationPage = () => {
    const [fname,setFname] = useState("");
    const [lname,setLname] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");


    // console.log(fname,lname,email,password)

    const data = {fname,lname,email,password}
    console.log(data)

    const Submithandler = (event) =>{
        event.preventDefault();
      
    }

  return (
    <div>
      <div className="studentForm">
        <h6>Registration Form</h6>
             <form onSubmit={Submithandler}>
                <div>
                    <label>First Name</label><br/>
                    <input type="text" onChange={(event)=>setFname(event.target.value)}/>
                </div>
                <div>
                    <label>Last Name</label><br/>
                    <input type="text" onChange={(event)=>setLname(event.target.value)}/>
                </div>
                <div>
                    <label>Email</label><br/>
                    <input type='email' onChange={(event)=>setEmail(event.target.value)}/>
                </div>
                <div>
                    <label>Password</label><br/>
                    <input type='password' onChange={(event)=>setPassword(event.target.value)}/>
                </div><br/>
                <button type='submit'>Submit</button>
            </form>
    </div>
    </div>
  )
}

export default RegistrationPage
