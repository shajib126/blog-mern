const express=require("express")
const router=express.Router()
const{veryfiToken}=require("../middleware/authVerifyMiddleware")

const{
     createTask,deleteTask,updateTask,taskListCount,findAllProduct,selectPostById

     }=require("../controllers/task")



router.post("/createTask",veryfiToken,createTask)
router.delete("/deleteTask/:id",veryfiToken,deleteTask)
router.post("/updateTask/:id",veryfiToken,updateTask)
router.get("/taskListCount",veryfiToken,taskListCount)
router.get('/task/:id',veryfiToken,selectPostById)



router.get("/findAllProduct",findAllProduct)
router.get("/selectPostById/:id",selectPostById)


module.exports=router
