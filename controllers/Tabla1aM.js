const { matchedData } = require('express-validator');
const {Tabla1aM} = require('../models')
const {handlehttpError} = require('../utils/handlehttpError')

const getTablas = async (req, res) => {
    try{
        const data = await Tabla1aM.find({});

        res.send({ data });
    }catch(e)
    {
        handlehttpError(res,"ERROR_GET_ALL_ITEMS")
    }
    
};

const getTabla = async (req, res) => {
    try{
      req = matchedData(req);
      const {id} = req;
      const data = await Tabla1aM.findById(id);
      res.send({ data });
    } catch(e){
       handlehttpError(res,"ERROR_GET_ITEM")
    }
};

const createTabla = async (req, res) => {
    try{
        const body = matchedData(req);
        //console.log(body);
        const data = await Tabla1aM.create(body);
        res.send({data});
    }catch(e)
    {
        handlehttpError(res,"ERROR_CREATE_ITEM")
    }
    
};

const UpdateTabla = async (req, res) => {
    try{
       
        const {id, ...body} = matchedData(req);
        //console.log(body);
        const data = await Tabla1aM.findOneAndUpdate({_id:id},body);
        res.send({data});
    }catch(e)
    {
        handlehttpError(res,"ERROR_UPDATE_ITEM")
    }
};

const DeleteTabla = async (req, res) => {
    try{
        req = matchedData(req);
        const {id} = req;
        // Delete normal exprees
        const data = await Tabla1aM.deleteOne({_id:id});
        //Soft Delete
        //const data = await editorialModel.delete({_id:id});
        res.send({data});
    }catch(e)
    {
        handlehttpError(res,"ERROR_DELETE_ITEM")
    }
};

module.exports = {getTablas, getTabla, createTabla, UpdateTabla, DeleteTabla};