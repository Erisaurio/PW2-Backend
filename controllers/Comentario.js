const { matchedData } = require('express-validator');
const {ComentarioModel} = require('../models')
const {handlehttpError} = require('../utils/handlehttpError')

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
  try{
    ////////////
    // req = matchedData(req);
    // const {movieid} = req;                     //{ name: 'john', age: { $gte: 18 } }
    // const data = await ComentarioModel.find({ movieid: movieid} )
    // res.send({ data });
    /////////////
        req = matchedData(req);
        const {movieid} = (req);
       
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
        //    console.log(data);

        res.send({ data });
  } catch(e){
     handlehttpError(res,"ERROR_GET_ITEM")
  }
};

const createComentario = async (req, res) => {
    try{
        const body = matchedData(req);
        //console.log(body);
        const data = await ComentarioModel.create(body);
        res.send({data});
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

module.exports = { getComentarios, getComentario, getComentariosUser, getComentariosMovie, createComentario, updateComentario, deleteComentario };