const mongoose = require("mongoose");
 //age:{type:Number,},
const CríticaScheme = new mongoose.Schema(
    {
      name:{type:String,},
      Comentario:{
        type:String,
      },
      Calificacion:{
        type:Number,
        default:1,
      },
      movieid:{
        type: mongoose.Types.ObjectId,
        ref: "Peliculas"
      },
      usuarioid:{
        type: mongoose.Types.ObjectId,
        ref: "Users"
      }
    },
    {
      timestamps:true,
      versionKey:false
    }
);

module.exports = mongoose.model("Críticas", CríticaScheme)