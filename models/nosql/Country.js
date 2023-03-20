const mongoose = require("mongoose");
 //age:{type:Number,},
const CountryScheme = new mongoose.Schema(
    {
      Id_pais:{type:String},
      email:{
        type:String,
        unique:true,
      },
      País:{type:String},
      role:{
        type:String,
      }
    },
    {
      timestamps:true,
      versionKey:false
    }
);

module.exports = mongoose.model("Country", CountryScheme)