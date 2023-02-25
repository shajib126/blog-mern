const {createTaskServices,deleteTaskServices,taskListCountServices,UpdateTaskServices,findAllProductsServices
    ,findProductsByIDServices

}=require("../services/taskServices")



exports.createTask=async (req,res)=>{
   

    try{
       
        const{title,description,image}=req.body

        const body={
            title,description,authorEmail:req.email,authorName:req.name,image
              }
              const result=await createTaskServices(body)
        res.status(200).json({
            status:"sucess",
            data:result
        })

    }
    catch (e) {
        res.status(400).json({
            status:"failed",
            data:e.message
        })

    }
}

exports.updateTask=async(req,res)=>{

    try{
         const id=req.params.id
         const todoListData=req.body
         
         const result=await UpdateTaskServices(id,todoListData,req)
         res.status(200).json({
              status: 'success',
              message: ' todo list update Sucessfull',
              result
              
          })
    }
    catch (error){
         res.status(401).json({
              status: 'failed',
              message: ' todo list update failed',
              data: error.message})
    }
}


exports.deleteTask=async (req,res)=>{

    try{
        const id=req.params.id
        const result=await deleteTaskServices(id,req)
        
        res.status(200).json({
            status:"sucess",
            data:result
        })
   }


   catch (e) {
       res.status(400).json({
           status:"failed",
           message:e.message
       })

}

}

exports.taskListCount=async(req,res)=>{

    try{
        const email=req.email

        const result=await taskListCountServices(email)

        res.status(200).json({
            status:"sucess",
            data:result

        })

    }
    catch (e) {

        res.status(400).json({
            status:"failed",
            message:e.message
        })
    }
}

exports.findAllProduct=async(req,res)=>{

    try{
         const data=await findAllProductsServices()
         res.status(200).json({
              message:"Sucess",
              data:data
         })
    }
    catch(error){

         res.status(401).json({
              message:"failed",
              data:error.message
         })
    }
}

exports.selectPostById=async(req,res)=>{

    try{
         const id=req.params.id
         let query={_id:id}
    
         const result=await findProductsByIDServices(query)
         res.status(200).json({
              status:"sucess",
              data:result
         }) 
    }
    catch(error){
         res.status(400).json({
              status:"fail",
              data:error
         })

    }
}


