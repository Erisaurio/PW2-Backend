const { matchedData } = require('express-validator');
const {plataformaModel} = require('../models')
const {handlehttpError} = require('../utils/handlehttpError')

const getPlataformas = async (req, res) => {
    try{
        const data = await plataformaModel.find({})
        res.send({ data });

    }catch(e)
    {
        handlehttpError(res,"ERROR_GET_ALL_ITEMS")
    }
    
};

const getPlataforma = async (req, res) => {
    try{
      req = matchedData(req);
      const {id} = req;
      const data = await plataformaModel.findById(id)
      res.send({ data });
    } catch(e){
       handlehttpError(res,"ERROR_GET_ITEM")
    }
};

const createPlataforma = async (req, res) => {
    try{
        const body = matchedData(req);
        //console.log(body);
        const data = await plataformaModel.create(body);
        res.send({data});
    }catch(e)
    {
        handlehttpError(res,"ERROR_CREATE_ITEM")
    }
    
};

const updatePlataforma = async (req, res) => {
    try{
        const {id, ...body} = matchedData(req);
        //console.log(body);
        const data = await plataformaModel.findOneAndUpdate({_id:id},body);
        res.send({data});
    }catch(e)
    {
        handlehttpError(res,"ERROR_UPDATE_ITEM")
    }
};

const deletePlataforma = async (req, res) => {
    try{
        req = matchedData(req);
        const {id} = req;
        // Delete normal exprees
        const data = await plataformaModel.deleteOne({_id:id});
        //Soft Delete
        //const data = await editorialModel.delete({_id:id});
        res.send({data});
    }catch(e)
    {
        handlehttpError(res,"ERROR_DELETE_ITEM")
    }
};

module.exports = {getPlataformas, getPlataforma, createPlataforma, updatePlataforma, deletePlataforma};