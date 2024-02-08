 import React, { useState } from 'react'

export default function AddContact({addContact}) {
    const [contactData, setContactData]= useState({name:"",email:""});
    const handleChange =(e)=>{
        if(e.target.name === "name"){
            setContactData({...contactData, name: e.target.value})
        }
        else{
            setContactData({...contactData, email: e.target.value})

        }
    }
    const handleAdd=()=>{
        if(contactData.name === "" || contactData.email === ""){
            alert("Plz fill all the details")
            return
        }
        addContact(contactData)
        setContactData({name: "",email:""})
    }
  return (
    <div className='formHeader'>
      <div className='add-contact'>Add Contact</div>
      <form>
        <label>Name:</label> 
        <input type='text' placeholder='Enter Name' name='name' 
        value={contactData.name} onChange={handleChange}></input> <br/>
        <label>Email:</label> 
        <input type='email ' placeholder='Enter Email' name='Email'
        value={contactData.email} onChange={handleChange}></input>
      </form>
     <button className='btn'onClick={handleAdd}>Add Contact</button>
    </div>
  )
}
