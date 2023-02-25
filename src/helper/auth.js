const jwt=require("jsonwebtoken")



exports.createToken = (result)=>{

     const payload = {
        
         'email': result["0"].email ,
         "name":result["0"].name
         
     };
 
     return jwt.sign(payload, process.env.SECRET_KEY, {
         expiresIn: '7d'
     });
 }