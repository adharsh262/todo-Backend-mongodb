
const express=require('express')
const router=express.Router()
const Tasks=require('../Models/todoList')


//Get
router.get('/showTasks',async(req,res)=>{
    try {
        const getAllTasks=await Tasks.find()
        if(!getAllTasks) {
            res.status(400).json({success:false,msg:"Error in Retriving Data"})
        }
        res.status(200).json({success:true,data:getAllTasks})
    } catch(e) {
        res.status(400).send("Error in Getting data : "+e)
        res.json({success:false})
    }
})



//Add
router.post('/addTasks',async (req,res)=>{
    try {
        const task=req.body
        const addTask=await Tasks.create(task)
        if(!addTask) {
            res.status(400).json({success:false,msg:"Error in Adding Data"})
        }
        res.status(200).json({success:true,msg:"Data Added Successfully"})
            
        

    } catch(e) {
        
        res.status(400).send("Error in Adding Data : "+e)
        res.json({success:false})
    }
})



// Delete
router.delete('/delete/:id',async (req,res)=>{
    try {
        const _id=req.params.id
        const deleteTask=await Tasks.findByIdAndDelete(_id)
        if(!deleteTask) {
            res.status(400).json({success:false,msg:"Error in Deleting Data"})
        }
        res.status(200).json({success:true,msg:"Deleted Successfully"})
    }catch (e) {
        res.status(400).send("Error in Deleting Data : "+e)
        res.json({success:false})
    }
})

// update request
router.patch('/updateTask/:id',async(req,res)=>{
    try {
        const {is_checked}=req.body
        const id=req.params.id
        
        await Tasks.findByIdAndUpdate(id,{is_checked:!is_checked},{new:true});
        
        
        res.status(200).json({msg:"Updated Successfully",success:true})
    } catch (error) {
        res.status(400).send("Error in updating Data : "+e)
        res.json({success:false})
    }
})

module.exports=router