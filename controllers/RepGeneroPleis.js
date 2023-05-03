const { matchedData } = require('express-validator');
const {GenerosModel} = require('../models')
const {handlehttpError} = require('../utils/handlehttpError')

const getAllGenerosReporte = async (req, res) => {
                      //tabla padre (1)
        const data = await GenerosModel.aggregate(
           [
             {
                  $lookup:
                  {
                     from: "peliculas", // tabla hijo (2) peliculas
                     let: { //tiene que iniciar con minuscula nomb.... si , Nobre.. no
                        nombresGeneros:"Genero" //tabla padre (1) Generos (string)
                     },
                     pipeline:[  //pipeleine referencia a tabla hijo (2)
                        {
                            $match:{
                                $expr:{
                                    //$in:[,(array)] $hijo $$padre
                                    $in:["$nombresGeneros" , "$Generos"]
                                    
                                }
                                
                            }
                        }
                      ],
                     as:"PeliculasDelGenero"
                  }
             }
           ]
        );
        console.log(JSON.stringify(data));
        //console.log(data);
        res.send({ data });
    
    
};



module.exports = {getAllGenerosReporte};