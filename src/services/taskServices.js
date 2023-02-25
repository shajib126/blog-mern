const taskModel=require("../models/post")



exports.createTaskServices=async(body)=>{
     return taskModel.create(body)

}

exports.deleteTaskServices=async(id,req)=>{
     const task = await taskModel.findById({_id:id})
     if(task.authorEmail == req.email){
          return taskModel.deleteOne({_id: id})
     }else{
          return false
     }
     

}

exports.UpdateTaskServices=async(id,todoListData,req)=>{
     const task = await taskModel.findById({_id:id})
     if(task.authorEmail == req.email){
          return await taskModel.updateOne({_id:id},todoListData)
     }else{
          return false
     }
     
 }

exports.taskListCountServices=async(email)=>{

     return taskModel.aggregate([
          {$match:{email:email}},
          {$group:{_id:"$status",sum:{$count:{}}}}
  ])
}

exports.findProductsByIDServices=async(query)=>{
     return taskModel.findOne(query)
}


          
exports.findAllProductsServices=async()=>{
     return taskModel.aggregate([
          {$project:{_id:1,title:1,description:1,image:1,name:1,email:1,
                    createdAt:{
               $dateToString:{
                    date:"$createdAt",
                    format:`%d-%m-%Y`
               }
                    }}}
     ])


}

