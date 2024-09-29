const mongoose=require('mongoose')

const mongoURI="mongodb://adharshpaila788:Adharsh123@gofood-shard-00-00.e7ts6.mongodb.net:27017,gofood-shard-00-01.e7ts6.mongodb.net:27017,gofood-shard-00-02.e7ts6.mongodb.net:27017/Todo?ssl=true&replicaSet=atlas-a22owy-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Todo"



const mongoDB=async ()=>{
    try {
        await mongoose.connect(mongoURI)

        console.log("Mongo DB Connected Successfully")
        const data= mongoose.connection.db.collection('tasks')
        const todoListData=await data.find({}).toArray()
        global.show_tasks=todoListData
        
    }catch(e)  {
        console.log(e)
    }
}

module.exports=mongoDB