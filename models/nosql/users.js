const mongoose = require("mongoose");
 //age:{type:Number,},
const UserScheme = new mongoose.Schema(
    {
      name:{type:String,},
      email:{
        type:String,
        unique:true,
      },
      password:{type:String,},
      role:{
        type: ["Admin", "User", "Critic"],
        default:"User",
      },
      editorial:{
        type: mongoose.Types.ObjectId
      },
      filename:{
        type: String,
        default:"",
      },
    },
    {
      timestamps:true,
      versionKey:false
    }
);

module.exports = mongoose.model("Users", UserScheme)