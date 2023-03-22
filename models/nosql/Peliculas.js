const mongoose = require("mongoose");
 //age:{type:Number,},
const PeliculasScheme = new mongoose.Schema(
    {
      Name:{
        type:String,
        unique:true
      },
      Sinopsis:{
        type:String
      },
      Fecha:{
        type:Date
      },       
      Promedio:{
        type:Number
      },  
      Portada:{
        type:String
      }, 
      Horas:{
        type:String
      },
      Minutos: {
        type:String
      },
      Generos:{
        type:Array,
        default:[],
      }
    },
    {
      timestamps:true,
      versionKey:false
    }
);

module.exports = mongoose.model("Peliculas", PeliculasScheme)