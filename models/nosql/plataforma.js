const mongoose = require("mongoose");

const PlataformaScheme = new mongoose.Schema(
    {
      name:{
        type:String,
        unique:true,
      },
    },
    {
      timestamps:true,
      versionKey:false
    }
);

module.exports = mongoose.model("Plataforma", PlataformaScheme)