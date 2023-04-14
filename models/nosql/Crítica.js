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
        type: mongoose.Types.ObjectId
      },
      Usuarioid:{
        type: mongoose.Types.ObjectId
      },
      movieidtxt:{
        type:String,
        default:"",
      },
      Usuarioidtxt:{
        type:String,
        default:"",
      },
      UsuarioName:{
        type:String,
        default:"",
      },
      UsuarioPic:{
        type:String,
        default:"",
      },
    },
    {
      timestamps:true,
      versionKey:false
    }
);

module.exports = mongoose.model("Críticas", CríticaScheme)