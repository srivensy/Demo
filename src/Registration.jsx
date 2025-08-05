import React from 'react'
import './App.css'
import { useState } from 'react'

const Registration = () => {
    const [data,setData] = useState({
        firstname:'',
        lastname:'',
        dob:'',
        phone:'',
        email:'',
        password:''
    })

    const {firstname,lastname,dob,phone,email,password} = data

    const inputhandeler = (event) =>{
        setData({
            ...data,
            [event.target.name]:event.target.value
        })
    }

    const submithandler = (event) =>{
        event.preventDefault();
        console.log(data)
    }
  return (
    <div>
        <div className='App-header'>
            <h1>Registration Form</h1><b/>
            <form onSubmit={submithandler}>
                <div>
                    <label>First Name</label>
                    <input type="text" name="firstname" value={firstname} onChange={inputhandeler} className="form-control"/>
                </div>
                <div>
                    <label >Last Name</label>
                    <input type="text" name='lastname' value={lastname} onChange={inputhandeler} className="form-control" />
                </div>
                <div>
                    <label>Date of Birth</label>
                    <input type="date" name='dob' value={dob} onChange={inputhandeler} className="form-control" />
                </div>
                <div>
                    <label >Phone Number</label>
                    <input type="number" name='phone' value={phone} onChange={inputhandeler} className="form-control"/>
                </div>
                <div>
                    <label >Email address</label>
                    <input type="email" name='email' value={email} onChange={inputhandeler}  className="form-control" />
                </div>
                <div className="mb-1">
                    <label >Password</label>
                    <input type="password" name='password' value={password} onChange={inputhandeler} className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Registration
