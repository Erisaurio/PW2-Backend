const { matchedData } = require('express-validator');
const {countryModel} = require('../models')
const {handlehttpError} = require('../utils/handlehttpError')

const getAllCountries = async (req, res) => {
    try{
        const data = await countryModel.find({});

        res.send({ data });
    }catch(e)
    {
        handlehttpError(res,"ERROR_GET_ALL_ITEMS")
    }
    
};

const getCountry = async (req, res) => {
    try{
      req = matchedData(req);
      const {id} = req;
      const data = await countryModel.findById(id);
      res.send({ data });
    } catch(e){
       handlehttpError(res,"ERROR_GET_ITEM")
    }
};

const createCountry = async (req, res) => {
    try{
        const body = matchedData(req);
        //console.log(body);
        const data = await countryModel.create(body);
        res.send({data});
    }catch(e)
    {
        handlehttpError(res,"ERROR_CREATE_ITEM")
    }
    
};

const UpdateCountry = async (req, res) => {
    try{
       
        const {id, ...body} = matchedData(req);
        //console.log(body);
        const data = await countryModel.findOneAndUpdate({_id:id},body);
        res.send({data});
    }catch(e)
    {
        handlehttpError(res,"ERROR_UPDATE_ITEM")
    }
};

const DeleteCountry = async (req, res) => {
    try{
        req = matchedData(req);
        const {id} = req;
        // Delete normal exprees
        const data = await countryModel.deleteOne({_id:id});
        //Soft Delete
        //const data = await editorialModel.delete({_id:id});
        res.send({data});
    }catch(e)
    {
        handlehttpError(res,"ERROR_DELETE_ITEM")
    }
};

module.exports = {getAllCountries, getCountry, createCountry, UpdateCountry, DeleteCountry};