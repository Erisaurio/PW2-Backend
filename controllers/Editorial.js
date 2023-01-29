const { matchedData } = require('express-validator');
const {editorialModel} = require('../models')
const {handlehttpError} = require('../utils/handlehttpError')

const getEditoriales = async (req, res) => {
    try{
        const data = await editorialModel.find({});

        res.send({ data });
    }catch(e)
    {
        handlehttpError(res,"ERROR_GET_ALL_ITEMS")
    }
    
};

const getEditorial = async (req, res) => {
    try{
      req = matchedData(req);
      const {id} = req;
      const data = await editorialModel.findById(id);
      res.send({ data });
    } catch(e){
       handlehttpError(res,"ERROR_GET_ITEM")
    }
};

const createEditorial = async (req, res) => {
    try{
        const body = matchedData(req);
        //console.log(body);
        const data = await editorialModel.create(body);
        res.send({data});
    }catch(e)
    {
        handlehttpError(res,"ERROR_CREATE_ITEM")
    }
    
};

const UpdateEditorial = async (req, res) => {
    try{
       
        const {id, ...body} = matchedData(req);
        //console.log(body);
        const data = await editorialModel.findOneAndUpdate({_id:id},body);
        res.send({data});
    }catch(e)
    {
        handlehttpError(res,"ERROR_UPDATE_ITEM")
    }
};

const DeleteEditorial = async (req, res) => {
    try{
        req = matchedData(req);
        const {id} = req;
        // Delete normal exprees
        const data = await editorialModel.deleteOne({_id:id});
        //Soft Delete
        //const data = await editorialModel.delete({_id:id});
        res.send({data});
    }catch(e)
    {
        handlehttpError(res,"ERROR_DELETE_ITEM")
    }
};

module.exports = {getEditoriales, getEditorial, createEditorial, UpdateEditorial, DeleteEditorial};