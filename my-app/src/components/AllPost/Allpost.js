import React, { useEffect, useState } from 'react'

import { SuccessToast } from '../../helper/FormHelper'
import  {Allpost,postByid}  from '../../ApiRequest/Api'
import {  useNavigate } from 'react-router-dom'
import { deleteBlogAlert } from '../DeleteAlert/DeleteAlert'


const Post = () => {
  const navigate=useNavigate()
  let [DataList,SetDataList]=useState([]);

 
  useEffect(()=>{

    Allpost().then((Result)=>{
          SetDataList(Result.data)
          
      })
      
      
  },[])
  
  
  const ReadPostItem=(id)=>{
   
     navigate("/selectpost/"+id)
    
  }

  return (
    <div className='container'>

      <div class="row">
      
      { DataList?.map((item,i)=>{
              return(
          <div class="col-sm-4 mb-3 mb-sm-0">
          <div key={i} class="card">
          <img src={item.image} class="card-img-top" alt=" "/>
            <div class="card-body">
              
              <h5 class="card-title">{item.title}</h5>
              <p class="card-text">{item.description}</p>
              <h6 className="date card-link">Post by : {item.authorName}</h6>
              <p className="card-text">Publish Date:{item.createdAt}</p>
              <div class="btn-group" role="group" aria-label="Basic example">
              <button onClick={ReadPostItem.bind(this,item._id)} class="btn btn-primary">Read Post</button>
              <button onClick={()=>deleteBlogAlert(item._id)} className='btn btn-danger'>Delete</button>
              </div>
            </div>
          </div>
        </div>)})}
      
       </div>
      
     </div>
   )}

  


export default Post