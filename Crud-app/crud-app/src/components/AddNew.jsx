import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import "./Add.css";

const AddNew = () => {
    const [inputData,setInputData]=useState({title:'', body:''})
    const navigate=useNavigate();

const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3030/users',inputData)
    .then(res=>{
        alert("Data added Successfully!")
        navigate('/')
    }).catch((err)=>{
        console.log(err);
    })
}

  return (
    <div>
        <h3 className='heading'>Manage Post</h3>

        <form onSubmit={handleSubmit}>
<input className="title" type="text" placeholder='Enter post title' onChange={e=>setInputData({...inputData,title:e.target.value})}/><br />
<input className='body' type="text" placeholder='Enter post body' onChange={e=>setInputData({...inputData,body:e.target.value})}/><br />
<input className='save-btn' type="submit" value="Save" />

 
<Link className='cancel-btn' to="/">Cancel</Link>


        </form>
        </div>
  )
}

export default AddNew