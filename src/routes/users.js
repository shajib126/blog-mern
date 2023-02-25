const express=require("express")
const router=express.Router()

const {registrationUser,loginUser,updateProfile,userDetails}=require("../controllers/user")

const{veryfiToken}=require("../middleware/authVerifyMiddleware")



router.post("/registrationUser",registrationUser)
router.post("/loginUser",loginUser)
router.post("/updateProfile",veryfiToken,updateProfile)
router.get("/userDetails",veryfiToken,userDetails)


module.exports=router