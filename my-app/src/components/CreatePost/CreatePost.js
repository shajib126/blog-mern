import {React,useRef} from 'react';
import {useNavigate} from "react-router-dom";
import {ErrorToast, IsEmpty,getBase64} from "../../helper/FormHelper"
import {NewTaskRequest} from "../../ApiRequest/Api";



const Create= () => {

    let titleRef, descriptionRef,userImgRef,userImgView = useRef()

    const navigate=useNavigate()



   const PreviewImage = () => {

    let ImgFile = userImgRef.files[0];
    getBase64(ImgFile).then((base64Img)=>{
      
         userImgView.src=base64Img;
    })
}

    const CreateTask = () => {

        const title = titleRef.value
        const description = descriptionRef.value
        const image=userImgView.src
        

        if (IsEmpty(title)) {
            ErrorToast("Title Required")
        } else if (IsEmpty(description)) {
            ErrorToast("Description Required")
        } 
        else if (IsEmpty(image)) {
          ErrorToast("Upload A Image")
      } 
        else {
          
            NewTaskRequest(title, description,image).then((res) => {
                if (res == true) {
                    navigate("/")
                }


            })
        }}

        return (

                <div fluid={true} className="content-body">
                    <row className="d-flex justify-content-center">
                        <div className="col-12 col-lg-8  col-sm-12 col-md-8  p-2">
                            <div className="card">
                            <img  ref={(input)=>userImgView=input} className="icon-nav-img two" src="" alt=""/>
                                <hr/>
                                <div className="card-body">
                                    <h4>Create New</h4>
                                    <br/>
                                    <input ref={(input) => titleRef = input} placeholder="Task Name"
                                           className="form-control animated fadeInUp" type="text"/>
                                    <br/>
                                    <textarea ref={(input) => descriptionRef = input} rows={5}
                                              placeholder="Task Description" className="form-control animated fadeInUp"
                                              type="text"/>

                                     <label>Profile Picture</label>
                                    <input onChange={PreviewImage}  ref={(input)=>userImgRef=input}  className="form-control animated fadeInUp " type="file"/>
                                    <br/>
                                    <button onClick={CreateTask} className="btn  btn-primary">Create</button>
                                </div>
                            </div>
                        </div>
                    </row>
                </div>
            

        );
    ;


}

export default Create;