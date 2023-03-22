const { matchedData } = require('express-validator');
const {PeliculasModel} = require('../models')
const {handlehttpError} = require('../utils/handlehttpError')

const getAllPeliculas = async (req, res) => {
    try{
        const data = await PeliculasModel.find({});

        res.send({ data });
    }catch(e)
    {
        handlehttpError(res,"ERROR_GET_ALL_ITEMS")
    }
    
};

const getPelicula = async (req, res) => {
    try{
        const {Name} = matchedData(req);
        console.log(Name);
        // Delete normal exprees
        const data = await PeliculasModel.findOne({Name:Name});
        //Soft Delete
        //const data = await editorialModel.delete({_id:id});
        res.send({data});
    }catch(e)
    {
        handlehttpError(res,"ERROR_GetPelicula")
    }
};


const createPelicula = async (req, res) => {
    try{
        const body = matchedData(req);
        //console.log(body);
        const data = await PeliculasModel.create(body);
        res.send({data});
    }catch(e)
    {
        handlehttpError(res,"ERROR_CREATE_ITEM")
    }
    
};

const UpdatePelicula = async (req, res) => {
    try{
       
        const {id, ...body} = matchedData(req);
        //console.log(body);
        const data = await PeliculasModel.findOneAndUpdate({_id:id},body);
        res.send({data});
    }catch(e)
    {
        handlehttpError(res,"ERROR_UPDATE_ITEM")
    }
};

const DeletePelicula = async (req, res) => {
    try{
        req = matchedData(req);
        const {id} = req;
        // Delete normal exprees
        const data = await PeliculasModel.deleteOne({_id:id});
        //Soft Delete
        //const data = await editorialModel.delete({_id:id});
        res.send({data});
    }catch(e)
    {
        handlehttpError(res,"ERROR_DELETE_ITEM")
    }
};

const getAllPeliculas1aM = async (req, res) => {
    try{
        const data = await PeliculasModel.find({});

        res.send({ data });
    }catch(e)
    {
        handlehttpError(res,"ERROR_GET_ALL_ITEMS")
    }
    
};

const getPelicula1aM = async (req, res) => {
    try{
        const {Name} = matchedData(req);
        console.log(Name);
        // Delete normal exprees
        const data = await PeliculasModel.findOne({Name:Name});
        //Soft Delete
        //const data = await editorialModel.delete({_id:id});
        res.send({data});
    }catch(e)
    {
        handlehttpError(res,"ERROR_GetPelicula")
    }
};

module.exports = {getAllPeliculas, getPelicula, createPelicula, 
    UpdatePelicula, DeletePelicula};