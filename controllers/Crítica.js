const { matchedData } = require('express-validator');
const {CriticaModel} = require('../models')
const {PeliculasModel} = require('../models')
const {handlehttpError} = require('../utils/handlehttpError')

const getCriticas = async (req, res) => {
    try{
        const data = await CriticaModel.find({})
        res.send({ data });

    }catch(e)
    {
        handlehttpError(res,"ERROR_GET_ALL_ITEMS")
    }

};

const wipeCriticas = async (req, res) => {
    try {
        await CriticaModel.deleteMany({});
        res.send({ message: "Collection wiped successfully" });
    } catch (e) {
        handlehttpError(res, "ERROR_WIPE_COLLECTION");
    }
};


const getCritica = async (req, res) => {
    try{
      req = matchedData(req);
      const {id} = req;
      const data = await CriticaModel.findById(id)
      res.send({ data });
    } catch(e){
       handlehttpError(res,"ERROR_GET_ITEM")
    }
};

const getCriticasUser = async (req, res) => {
    try{
      ////////
      // req = matchedData(req);
      // const {Usuarioid} = req;
      // const data = await CriticaModel.find({ Usuarioid: Usuarioid} )
      // res.send({ data });
      ////////
          req = matchedData(req);
          const {Usuarioid} = (req);
  
          const data = await CriticaModel.find({Usuarioid:Usuarioid});

          res.send({data});
  
    } catch(e){
       handlehttpError(res,"ERROR_GET_ITEM")
    }
  };


  const getCriticasUserMovie = async (req, res) => {
    try{


          const Usuarioid = req.params.Usuarioid;
          const MovieId = req.params.MovieId;
  
          const data = await CriticaModel.find({usuarioid:Usuarioid, movieid:MovieId});

          res.send({data});
  
    } catch(e){
       handlehttpError(res,"ERROR_GET_ITEM")
    }
  };
// const getCriticasUser = async (req, res) => {
//   try{
//     ////////
//     // req = matchedData(req);
//     // const {Usuarioid} = req;
//     // const data = await CriticaModel.find({ Usuarioid: Usuarioid} )
//     // res.send({ data });
//     ////////
//         req = matchedData(req);
//         const {Usuarioid} = (req);

//         const data = await CriticaModel.aggregate(
//             [
//                {
//                    $lookup:
//                    {
//                        from: "users",
//                        localField:"Usuarioid",
//                        foreignField:"_id",
//                        as: "Usuarioinfo"
//                    },
//                },
//                {
//                   $unwind: "$Usuarioinfo"
//                },
//                {
//                   $match: { Usuarioidtxt: `${Usuarioid}` }
//                }
//            ]
//         )
//         //console.log(`"${Usuarioid}"`);
//            //console.log(data);

//         res.send({ data });

//   } catch(e){
//      handlehttpError(res,"ERROR_GET_ITEM")
//   }
// };

// const getCriticasMovie = async (req, res) => {
//   try{
//     //////////
//     // req = matchedData(req);
//     // const {movieid} = req;                     //{ name: 'john', age: { $gte: 18 } }
//     // const data = await CriticaModel.find({ movieid: movieid} )
//     // res.send({ data });
//     //////////
//         req = matchedData(req);
//         const {movieid} = (req);

//         const data = await CriticaModel.aggregate(
//             [
//                {
//                    $lookup:
//                    {
//                        from: "users",
//                        localField:"Usuarioid",
//                        foreignField:"_id",
//                        as: "Usuarioinfo"
//                    },
//                },
//                {
//                   $unwind: "$Usuarioinfo"
//                },
//                {
//                   $match: { movieid: `${movieid}` }
//                }
//            ]
//         )
//         //console.log(`"${movieid}"`);
//            //console.log(JSON.stringify(data));

//         res.send({ data });

//   } catch(e){
//      handlehttpError(res,"ERROR_GET_ITEM")
//   }
// };

const getCriticasMovie = async (req, res) => {
    try{
      //////////
      // req = matchedData(req);
      // const {movieid} = req;                     //{ name: 'john', age: { $gte: 18 } }
      // const data = await CriticaModel.find({ movieid: movieid} )
      // res.send({ data });
      //////////
        req = matchedData(req);
        const {movieid} = (req);

        // Delete normal exprees
        const data = await CriticaModel.find({movieid:movieid});

        res.send({data});

    } catch(e){
       handlehttpError(res,"ERROR_GET_ITEM")
    }
  };
  

const createCritica = async (req, res) => {
    try{
        const body = matchedData(req);
        //console.log(body);
        const data = await CriticaModel.create(body);

        const criticas = await CriticaModel.find({movieid: body.movieid});
        const calificaciones = criticas.map(critica => critica.Calificacion);
        const calSum = calificaciones.reduce((acc, curr) => acc + curr);
        calAvg = { "Promedio": calSum/calificaciones.length};

        await PeliculasModel.findOneAndUpdate({_id:body.movieid},calAvg);

        res.send({ data });
    }catch(e)
    {
        handlehttpError(res,"ERROR_CREATE_ITEM")
    }

};

const updateCritica = async (req, res) => {
    try{
        const id = req.params.id
        const { Calificacion } = req.body; // Only extract the Calificacion field from the body

        const data = await CriticaModel.findOneAndUpdate(
          { _id: id },
          { $set: { Calificacion } }, // Use $set operator to update only the Calificacion field
          { new: true } // Return the updated document
        );

        const criticas = await CriticaModel.find({movieid: data.movieid});
        const calificaciones = criticas.map(critica => critica.Calificacion);
        const calSum = calificaciones.reduce((acc, curr) => acc + curr);
        calAvg = { "Promedio": calSum/calificaciones.length};

        await PeliculasModel.findOneAndUpdate({_id:data.movieid},calAvg);

        res.send({data});
    }catch(e)
    {
        handlehttpError(res,"ERROR_UPDATE_ITEM")
    }
};

const deleteCritica = async (req, res) => {
    try{
        req = matchedData(req);
        const {id} = req;
        // Delete normal exprees
        const data = await CriticaModel.deleteOne({_id:id});
        //Soft Delete
        //const data = await editorialModel.delete({_id:id});
        res.send({data});
    }catch(e)
    {
        handlehttpError(res,"ERROR_DELETE_ITEM")
    }
};

module.exports = { getCriticas, getCritica, getCriticasUser, getCriticasMovie, createCritica, updateCritica, deleteCritica, getCriticasUserMovie, wipeCriticas};