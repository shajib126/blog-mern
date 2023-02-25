import axios from "axios"
import {ErrorToast,SuccessToast} from "../helper/FormHelper"
import {setUserDetails,setToken,getToken} from "../helper/SesssionHelper"

const BaseUrl="http://localhost:5000/api/v1"
const AxiosHeader={headers:{"token":getToken()}}


export function RegistrationUser(name,mobile,password,email,photo) {
     
     const url="http://localhost:5000/api/v1/registrationUser"
     const body={
          name,
          email,
          mobile,
          password,
          photo
     }
    
  return axios.post(url,body)
     .then((res)=>{
          if(res.status===200){
               if(res.data['status']==="fail"){
                    if(res.data['data']['keyPattern']['email']===1){
                        ErrorToast("Email Already Exist")
                        return false;
                    }

                    else{
                        ErrorToast("Something Went Wrong")
                        return false;
                    }
                }
                else {
                    SuccessToast("Registration Success")
                    return true;

                }
            }
            else{
                ErrorToast("Something Went Wrong")
                return  false;
            }


     })
     .catch((error)=>{
          ErrorToast(error.message)
            return false
     })

    




}


export function LoginFunction(email,password){
    const url=BaseUrl +"/loginUser"
    const body={
        "email":email,
        "password":password
    }

   return  axios.post(url,body)

        .then((result)=>{

            if (result.status===200){

                setToken(result.data["token"])
                setUserDetails(result.data["data"])
                SuccessToast("Login Sucess")
                return true

            }
            else {
                ErrorToast("Invalid Email or Password")
                return  false;
            }
        })
        .catch((error)=>{
            ErrorToast(error.message)
            return false;
        })
}

export function NewTaskRequest(title,description,image){

    const url=BaseUrl+"/createTask"
    const body={
        title,
        description,
        image
    }
    

   return  axios.post(url,body,AxiosHeader,{
    headers:'application/json'
   })
        .then((res)=>{
           

        if(res.status===200){
            SuccessToast("New Task Created")
            return true;

        }
        else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    })
        .catch((error)=>{
            ErrorToast(error.message)
        
            return false;
        })

}

export function Allpost(){

    const url=BaseUrl+"/findAllProduct"
    return  axios.get(url)
        .then((res)=>{
       
        if(res.status===200){ 
            return res.data;
            
        }
        else {
           
            return false;
        }
    })
        .catch((error)=>{
            
            return false;
        })
}


export function postByid(id){

    const url="http://localhost:5000/api/v1/task/"+id
    return  axios.get(url,AxiosHeader)
        .then((res)=>{
            if(res.status === 200){
                return res.data
            }
            return false
    })
        .catch((error)=>{
            
            return error.message;
        })
}

export function updateBlog(id,body){
    const url="http://localhost:5000/api/v1/updateTask/"+id
    return axios.post(url,body,AxiosHeader).then((res)=>{
        if(res.status === 200){
            return res.data
        }
        return false
})
    .catch((error)=>{
        
        return error.message;
    })
}

export function deleteBlog(id){
    
    const url="http://localhost:5000/api/v1/deleteTask/"+id
    return axios.delete(url,AxiosHeader).then((res)=>{
        if(res.status === 200){
            return res.data
            
        }
        return false
})
    .catch((error)=>{
        
        return error.message;
    })
}

