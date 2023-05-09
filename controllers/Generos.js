const { matchedData } = require('express-validator');
const {GenerosModel} = require('../models')
const {handlehttpError} = require('../utils/handlehttpError')

const getAllGeneros = async (req, res) => {
    try{
        const data = await GenerosModel.find({});

        res.send({ data });
    }catch(e)
    {
        handlehttpError(res,"ERROR_GET_ALL_ITEMS")
    }
    
};

const getGenero = async (req, res) => {
    try{
      req = matchedData(req);
      const {id} = req;
      const data = await GenerosModel.findById(id);
      res.send({ data });
    } catch(e){
       handlehttpError(res,"ERROR_GET_ITEM")
    }
};

const createGenero = async (req, res) => {
    try{
        //const user = req.user;
        // console.log(user)
        const body = matchedData(req);
        //console.log(body);
        const data = await GenerosModel.create(body);
        res.send({data});
    }catch(e)
    {
        handlehttpError(res,"ERROR_CREATE_ITEM")
    }
    
};

const UpdateGenero = async (req, res) => {
    try{
       
        const {id, ...body} = matchedData(req);
        console.log(id);
        //console.log(body);
        const data = await GenerosModel.findOneAndUpdate({_id:id},body);
        res.send({data});
    }catch(e)
    {
        handlehttpError(res,"ERROR_UPDATE_ITEM")
    }
};

const DeleteGenero = async (req, res) => {
    try{
        req = matchedData(req);
        const {id} = req;
        console.log(id);
        // Delete normal exprees
        const data = await GenerosModel.deleteOne({_id:id});
        //Soft Delete
        //const data = await editorialModel.delete({_id:id});
        res.send({data});
    }catch(e)
    {
        handlehttpError(res,"ERROR_DELETE_ITEM")
    }
};



module.exports = {getAllGeneros, getGenero, createGenero, 
    UpdateGenero, DeleteGenero};