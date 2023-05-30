const { matchedData } = require('express-validator');
const {ComentarioModel} = require('../models')
const {handlehttpError} = require('../utils/handlehttpError')
const mongoose = require('mongoose');

const getComentarios = async (req, res) => {
    try{
        const data = await ComentarioModel.find({})
        res.send({ data });

    }catch(e)
    {
        handlehttpError(res,"ERROR_GET_ALL_ITEMS")
    }
    
};

const getComentario = async (req, res) => {
    try{
      req = matchedData(req);
      const {id} = req;
      const data = await ComentarioModel.findById(id)
      res.send({ data });
    } catch(e){
       handlehttpError(res,"ERROR_GET_ITEM")
    }
};

const getComentariosUser = async (req, res) => {
  try{
    /////////////
    // req = matchedData(req);
    // const {Usuarioid} = req;
    // const data = await ComentarioModel.find({ Usuarioid: Usuarioid} )
    // res.send({ data });
    /////////////
        req = matchedData(req);
        const {Usuarioid} = (req);

        const data = await ComentarioModel.aggregate(
            [
               {
                   $lookup:
                   {
                       from: "users",
                       localField:"Usuarioid",
                       foreignField:"_id",
                       as: "Usuarioinfo"
                   },
               },
               {
                  $unwind: "$Usuarioinfo"
               },
               
           ]
        )
        // console.log(Usuarioid);
        //    console.log(data);

        res.send({ data });

  } catch(e){
     handlehttpError(res,"ERROR_GET_ITEM")
  }
};

const getComentariosMovie = async (req, res) => {
    try {
      const  Movie  = req.params.movieid;
  
      const data = await ComentarioModel.aggregate([
        {
          $match: {
            movieid: mongoose.Types.ObjectId(Movie) // Convert movieid to ObjectId if it's a string
          }
        },
        {
          $lookup: {
            from: "users",
            localField: "Usuarioid",
            foreignField: "_id",
            as: "Usuarioinfo"
          }
        },
        {
          $unwind: "$Usuarioinfo"
        }
      ]);
  
      res.send({ data });
    } catch (e) {
      handlehttpError(res, "ERROR_GET_ITEM");
    }
  };

const wipeComentarios = async (req, res) => {
  try {
      await ComentarioModel.deleteMany({});
      res.send({ message: "Collection wiped successfully" });
  } catch (e) {
      handlehttpError(res, "ERROR_WIPE_COLLECTION");
  }
};

const createComentario = async (req, res) => {
    try{
        const body = matchedData(req);
        //console.log(body);
        const data = await ComentarioModel.create(body);
        res.send(data);
    }catch(e)
    {
        handlehttpError(res,"ERROR_CREATE_ITEM")
    }
    
};

const updateComentario = async (req, res) => {
    try{
        const {id, ...body} = matchedData(req);
        //console.log(body);
        const data = await ComentarioModel.findOneAndUpdate({_id:id},body);
        res.send({data});
    }catch(e)
    {
        handlehttpError(res,"ERROR_UPDATE_ITEM")
    }
};

const deleteComentario = async (req, res) => {
    try{
        req = matchedData(req);
        const {id} = req;
        // Delete normal exprees
        const data = await ComentarioModel.deleteOne({_id:id});
        //Soft Delete
        //const data = await editorialModel.delete({_id:id});
        res.send({data});
    }catch(e)
    {
        handlehttpError(res,"ERROR_DELETE_ITEM")
    }
};

module.exports = { getComentarios, getComentario, getComentariosUser, getComentariosMovie, createComentario, updateComentario, deleteComentario, wipeComentarios };