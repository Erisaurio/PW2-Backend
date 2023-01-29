const mongoose = require("mongoose");

const EditorialScheme = new mongoose.Schema(
    {
      name:{
        type:String,
        unique:true,
      },
      description:{
        type:String,
      },
    },
    {
      timestamps:true,
      versionKey:false
    }
);

module.exports = mongoose.model("Editorial", EditorialScheme)