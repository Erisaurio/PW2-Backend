const { matchedData } = require('express-validator');
const {castModel} = require('../models')
const {PeliculasModel} = require('../models')
const {handlehttpError} = require('../utils/handlehttpError')

const getCasts= async (req, res) => {
    try{
        const data = await castModel.find({});

        res.send({ data });
    }catch(e)
    {
        handlehttpError(res,"ERROR_GET_ALL_ITEMS")
    }
    
};

const getCast = async (req, res) => {
    try{
      req = matchedData(req);
      const {id} = req;
      const data = await castModel.findById(id);
      res.send({ data });
    } catch(e){
       handlehttpError(res,"ERROR_GET_ITEM")
    }
};


const createCast = async (req, res) => {
    try{
        const body = matchedData(req);
        console.log(body);
        const data = await castModel.create(body);
        res.send({data});
    }catch(e)
    {
        handlehttpError(res,"ERROR_CREATE_ITEM")
    }
    
};

const updateCast = async (req, res) => {
    try{
       
        const {id, ...body} = matchedData(req);
        //console.log(body);
        const data = await castModel.findOneAndUpdate({_id:id},body);
        res.send({data});
    }catch(e)
    {
        handlehttpError(res,"ERROR_UPDATE_ITEM")
    }
};

const deleteCast = async (req, res) => {
    try{
        req = matchedData(req);
        const {id} = req;
        // Delete normal exprees
        const data = await castModel.deleteOne({_id:id});
        //Soft Delete
        //const data = await editorialModel.delete({_id:id});
        res.send({data});
    }catch(e)
    {
        handlehttpError(res,"ERROR_DELETE_ITEM")
    }
};

module.exports = {getCasts, getCast, createCast, updateCast, deleteCast};