const { matchedData } = require('express-validator');
const {castModel} = require('../models')
const {PeliculasModel} = require('../models')
const {handlehttpError} = require('../utils/handlehttpError')

const MEDIA_PATH3 = `${__dirname}/../cast_storage`;

var fs = require('fs');

const getCasts= async (req, res) => {
    try{
        const data = await castModel.find({});

        res.send({ data });
    }catch(e)
    {
        handlehttpError(res,"ERROR_GET_ALL_ITEMS")
    }
    
};

const wipeCast = async (req, res) => {
    try {
        await castModel.deleteMany({});
        res.send({ message: "Collection wiped successfully" });
    } catch (e) {
        handlehttpError(res, "ERROR_WIPE_COLLECTION");
    }
  };


const getsomeCasts = async (req, res) => {
    try{
        const data = await castModel.aggregate([ { $sample: { size: 10 } } ])

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
        //console.log(body);
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

        const oldimgdata = await castModel.findById(id);
        const {photo} = oldimgdata;
        const filepath = `${MEDIA_PATH3}/${photo}`
        //console.log(oldimgdata);
        

        if(photo != ""){
            
            fs.exists(`${filepath}`, (exists) => {
                exists 
                ?      
                fs.unlinkSync(filepath) 
                : 
                console.log('Not found!');
            });
        }

        const data = await castModel.deleteOne({_id:id});
        //Soft Delete
        //const data = await editorialModel.delete({_id:id});
        res.send({data});
    }catch(e)
    {
        handlehttpError(res,"ERROR_DELETE_ITEM")
    }
};

module.exports = {getCasts, getCast, createCast, updateCast, deleteCast, getsomeCasts, wipeCast};