const {
    
    createUserServices,
    UserLogInServices, updateProfileServices, userDetailServices

        } = require("../services/userServices")

const auth = require("../helper/auth")



exports.registrationUser=async(req,res)=>{

try{
    const body=req.body
    const data= await createUserServices(body)

      res.status(200).json({
         status: "success",
          data: data 
        })

}

catch(e){
    res.status(200).json({
         status: "fail",
          data: e 
        })
}

}


exports.loginUser = async (req, res) => {


    try {

        const body = req.body
        const result = await UserLogInServices(body)

        const token = auth.createToken(result)
        

        if (result) {
            res.status(200).json({
                status: "sucess",
                data: result,
                token: token
            })
        }

        else {
            res.status(401).json({ status: "unauthorized" })

        }
    }
    catch (e) {
        res.status(400).json({
            status: "Login Failed",
            message:e.message
        })

    }

}


exports.updateProfile = async (req, res) => {
    try {
        const email = req.email
        const body = req.body
        const result = await updateProfileServices(email,body)
        res.status(200).json({
            status: "sucess",
            data: result
        })
    }
    catch (e) {
        res.status(400).json({
            status: "failed",
            message: e.message
        })
    }

}

exports.userDetails = async (req, res) => {
    try {

        const email = req.email

        const result = await userDetailServices(email)

        res.status(200).json({
            status: "sucess",
            data: result
        })
    }


    catch (e) {
        res.status(400).json({
            status: "failed",
            data: e.message
        })


    }
}






