class SessionHelper{

     setToken(token){
         localStorage.setItem("token",token)
     }
     getToken(){
        return  localStorage.getItem("token")
     }
     setUserDetails(UserDetails){
         localStorage.setItem("UserDetails",JSON.stringify(UserDetails))
     }
 
    getUserDetails(){
        return  JSON.parse(localStorage.getItem("UserDetails"))
     }
     removeSession(){
         localStorage.clear()
         window.location.href="/login"
     }
 
     setEmail(email){
         localStorage.setItem("email",email)
     }
     getEmail(){
         return  localStorage.getItem("email")
     }
 
 
 
 }
 
 export const {setEmail,getEmail,setToken,getToken,setUserDetails,getUserDetails,removeSession}=new SessionHelper()