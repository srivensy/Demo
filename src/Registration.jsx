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

    console.log(data)

    const {firstname,lastname,dob,phone,email,password} = data

    const inputhandeler = (event) =>{
        setData({...data,[event.target.name]:[event.target.value]})
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
                    <input type="text" name={firstname} onChange={inputhandeler} class="form-control"/>
                </div>
                <div>
                    <label >Last Name</label>
                    <input type="text" name={lastname} onChange={inputhandeler} class="form-control" id="exampleInputPassword1"/>
                </div>
                <div>
                    <label>Date of Birth</label>
                    <input type="date" name={dob} onChange={inputhandeler} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div>
                    <label >Phone Number</label>
                    <input type="number" name={phone} onChange={inputhandeler} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div>
                    <label >Email address</label>
                    <input type="email" name={email} onChange={inputhandeler}  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-1">
                    <label >Password</label>
                    <input type="password" name={password} onChange={inputhandeler} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

            {/* <h1>Registration Form</h1><b/>
            <form>
                <div className='mb-1'>
                <label>First Name</label><br/>
                <input type='text' placeholder='First Name'/>
                </div >
                <div className='mb-1'>
                <label>Last Name</label><br/>
                <input type='text' placeholder='Last Name'/>
                </div >
                <div  className='mb-1'>
                    <label>Date of Birth</label><br/>
                    <input type='date' placeholder='Enter yout DOB'/>
                </div>
                <div  className='mb-1'>
                    <label>Phone Number</label><br/>
                    <input type='number' placeholder='Enter your phone number'/>
                </div>
                <div  className='mb-1'>
                    <label>Email</label><br/>
                    <input type='email' placeholder='Enter your email'/>
                </div>
                <div  className='mb-1'>
                    <label>Password</label><br/>
                    <input type='password' placeholder='Enter your password'/>
                </div>
                <div  className='mb-1'>
                    <button>Submit</button>
                </div>
            </form> */}
        </div>
    </div>
  )
}

export default Registration
