const mongoos = require("mongoose")
require ('dotenv').config()

const connectedToDb= async()=>{
    await mongoos.connect(process.env.MONGO_UR)
    .then(() => console.log('Connected to mongo db!'))
    .catch((err)=>{console.log(" error in connecting to mongo db")})

}

 module.exports=connectedToDb
                                 