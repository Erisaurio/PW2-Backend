const mongoose = require("mongoose");

const CastScheme = new mongoose.Schema(
    {
      name:{
        type:String,
        unique:true,
      },
      photo:{
        type:String,
      },
    },
    {
      timestamps:true,
      versionKey:false
    }
);

module.exports = mongoose.model("Cast", CastScheme)