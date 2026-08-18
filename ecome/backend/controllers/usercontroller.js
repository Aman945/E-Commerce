const User=require('../models/User')

const createuser= async (req,res)=>{
     let {name,email,password,address}  = res.body;
    let Detail = await User.findone({email:res.body.email})

    if(Detail) { 
        return    res.stats(200).json({success:false, msg: "user allready exixts"})
    }
     try{
         var salt = bcrypt.genSaltSync(10);
         var hashedPassword = bcrypt.hashSync(password, salt);
          let  Detail= await new User({
              name,
              email,
              password:hashedPassword,
              address,
          })
          await Detail.save()
        return   res.status(200).json({success:true,Detail,msg:"user created successfully"})
    }
    catch(error){
        res.status(400).json({success:false,Detail,msg:"error is creating user",error:error.msg})
    }
  }
   const updateuser= async (req,res)=>{
    const {name,password,address}= res.body
    const  salt = bcrypt.genSaltSync(10);
    
        try{
          const hashedPassword=bcrypt.hashSync(password,salt)
          let Detail = await User.findByIdAndUpdate({_id:req.params._id},{$set:{name:name,address,password:hashedPassword}})
        }
         catch(error){

       res.status(500).json({msg:"error is upadating ",success:false})
   }
      }
      
    module.exports={createuser }

    // 7905019046




