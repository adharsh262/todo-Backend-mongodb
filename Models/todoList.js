const mongoose=require('mongoose')


const newSchema=new mongoose.Schema({
    
        task: {
            type:String,
            required:true
        },
        is_checked: {
            type:Boolean,
            default:false

        },
        created_at: {
            type : Date,
            default:Date.now()

        }

    
})


module.exports=mongoose.model("tasks",newSchema)