const mongoose = require("mongoose");
 //age:{type:Number},
const GenerosScheme = new mongoose.Schema(
    {
      Genero:{type:String,
        unique:true,}
    },
    {
      timestamps:true,
      versionKey:false
    }
);

module.exports = mongoose.model("Generos", GenerosScheme)