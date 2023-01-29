const mongoose = require("mongoose");


 //age:{type:Number,},
const Tabla1aMSchema = new mongoose.Schema(
    {
      name:{type:String,},
      criticos:{
        type: Array,
        default: [],
      },
    },
    {
      timestamps:true,
      versionKey:false
    }
);

module.exports = mongoose.model("Tabla1aM", Tabla1aMSchema)