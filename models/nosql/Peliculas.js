const mongoose = require("mongoose");
 //age:{type:Number,},
const PeliculasScheme = new mongoose.Schema(
    {
      Name:{
        type:String,
        unique:true
      },
      Sinopsis:{
        type:String,
        default:"",
      },
      Fecha:{
        type:Date
      },       
      Promedio:{
        type:Number,
        default:0,
      },  
      Portada:{
        type:String,
        default:"",
      }, 
      Horas:{
        type:String,
        default:"",
      },
      Minutos: {
        type:String,
        default:"",
      },
      Generos:{
        type:Array,
        default:[],
      },
      Cast: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cast'
      }]
    },
    {
      timestamps:true,
      versionKey:false
    }
);

module.exports = mongoose.model("Peliculas", PeliculasScheme)