import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios";
import { Link } from 'react-router-dom';
import "./Edit.css";

const Edit = () => {
    const {id} =useParams();
    const [inputData,setInputData]=useState({title:'', body:''})
    const [data,setData]=useState([])
    const navigate=useNavigate()

useEffect(()=>{
    axios.get('http://localhost:3030/users/'+id).then((res)=>setData(res.data))
    .catch(err=>console.log(err));

},[])




const handleSubmit=(e)=>{
    e.preventDefault()
    axios.put('http://localhost:3030/users/'+id, data)
    .then(res=>{
        alert("Data added successfully!!")
        navigate('/')

    })

}

  return (
    <div>

<h3 className='heading'>Edit The Data</h3>
<form onSubmit={handleSubmit}>
<input className='title' type="text" placeholder='title' value={data.title}  onChange={e=>setData({...data,title:e.target.value})}/><br />
<input className='body'type="text" placeholder='body' value={data.body} onChange={e=>setData({...data,body:e.target.value})}/><br />
<input className='save-btn' type="submit" value="Edit"  />


 
<Link className='cancel-btn' to="/">Cancel</Link>



        </form>

    </div>
  )
}

export default Edit