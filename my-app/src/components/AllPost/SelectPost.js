import { React, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { postByid, updateBlog } from "../../ApiRequest/Api";
import { SuccessToast } from "../../helper/FormHelper";
import { deleteBlogAlert } from "../DeleteAlert/DeleteAlert";

const SelectPost = () => {
  const { id } = useParams();
  const [blogDetails, setBlogDetails] = useState();
  
  let {title,description} = useRef()
  const navigate = useNavigate()

  const handleEdit = ()=>{
     const titleVal = title.value;
     const descriptionVal = description.value;
     updateBlog(id,{title:titleVal,description:descriptionVal}).then((result)=>{
        SuccessToast('Updated')
        navigate('/')
     })
     
  }
  useEffect(() => {
    postByid(id).then((result) => {
      setBlogDetails(result.data);
    });
  }, []);

  useEffect(()=>{
     title.value = blogDetails?.title
     description.value = blogDetails?.description
  },[blogDetails])
  return (
    <div className="container mt-4">
      <div className="row">
        <div class="card">
          <img
            style={{ width: "500px", margin: "auto" }}
            src={blogDetails?.image}
            class="card-img-top"
            alt={blogDetails?.title}
          />
          <div class="card-body">
               <input type="text" ref={(input)=>(title = input)} /> 
                <input type="text" ref={(input)=>(description = input)} />
            <p class="card-text">Author Name: {blogDetails?.authorName}</p>
            <p class="card-text">Author email: {blogDetails?.authorEmail}</p>
            <div class="btn-group" role="group" aria-label="Basic example">
              <button onClick={()=>deleteBlogAlert(id)} className="btn btn-danger">Del</button>
              <button onClick={handleEdit} className="btn btn-success">edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectPost;
