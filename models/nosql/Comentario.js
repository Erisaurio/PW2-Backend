const mongoose = require("mongoose");
 //age:{type:Number,},
const ComentarioScheme = new mongoose.Schema(
    {
      name:{type:String,},
      Comentario:{
        type:String,
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

module.exports = mongoose.model("Comentarios", ComentarioScheme)