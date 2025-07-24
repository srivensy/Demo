import React, { useState } from 'react'

const React_Form = () => {
    const [name,setName]=useState('');
    const [submit,setSubmit]=useState('');

    const name_field=(event)=>{
        setName(event.target.value)

    }

    const Submit_data=(event)=>{
        event.preventDefault();
        setSubmit(name);
        setName(' ');
    }

  return (
    <div>
        <h1>{submit}</h1>
      <form onSubmit={Submit_data}>
        <input type='text' placeholder='First Name' onChange={name_field}/><br/>
        {/* <input type='text' placeholder='Last Name' onChange={name_field}/><br/>
        <input type='date' placeholder='Date of Birth' onChange={name_field}/><br/>
        <input type='number' placeholder='Enter your phone number' onChange={name_field}/><br/> */}
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default React_Form
