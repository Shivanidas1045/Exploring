import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import "./PostList.css"



const PostList = () => {
    const [column,setColumn]=useState([])
    const [entryRecord,setEntryRecord]=useState([])
    const [currentPage,setCurrentPage]=useState(1);
    const ItemPerPage=3;
    const rows=entryRecord.slice(currentPage * ItemPerPage, (currentPage + 1) * ItemPerPage)
    const numberOfPages=Math.ceil(entryRecord.length / ItemPerPage)
    const pageIndex=Array.from({length : numberOfPages},(_,id)=>id+1)

    const handlePageChange=(pg)=>{
        setCurrentPage(pg);
    }
   

    
    const navigate=useNavigate()


    useEffect(()=>{
        axios.get('http://localhost:3030/users')
        .then(res=>{
            setColumn(Object.keys(res.data[0]))
            setEntryRecord(res.data)
          })
    },[])


    

    const handleSubmit=(id)=>{
        const confirmation=window.confirm("Are you sure you want to delete this post?")
        if(confirmation){
            axios.delete(`http://localhost:3030/users/`+id)
            .then(res=>
            alert("Data deleted Successfully!!"))
            navigate("/")
            
        }
    }




  return (
    <>

    <Link className='add-btn' to="/add new">Add New +</Link>

<h3 className='heading'>Post List</h3>
    
<table className='table-container'>


    {/* head of the table */}
    <thead className='table-head'>
<tr>
    <th>ID</th>
    <th>Title</th>
    <th>Body</th>
    <th>Action</th>
</tr>
    </thead>

    {/* body od the table */}
<tbody>
    {
        rows.map((elem,index)=>{
            return(
            <tr key={index}>
            <td>{elem.id}</td>
            <td>{elem.title}</td>
            <td>{elem.body}</td>
           <td>
           <Link className='Edit-btn' to={`/edit/${elem.id}`}>Edit</Link>
           {/* <Link to={`/delete/${elem.id}`}>Delete</Link> */}
           <button className='Delete-btn' onClick={e=>handleSubmit(elem.id)}>Delete</button>
           </td>
            </tr>
            )
        })
    }
</tbody>

</table>

{/* pagination added */}

<button style={{backgroundColor:"gray"}} onClick={()=>handlePageChange(currentPage-1)}>Prev</button>
{pageIndex.slice(Math.max(0,currentPage-2),
 Math.min(numberOfPages,currentPage-3))}
<button style={{backgroundColor:"gray"}} onClick={()=>handlePageChange(currentPage+1)}>Next</button>


    </>
  )
}

export default PostList