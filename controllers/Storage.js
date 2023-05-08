const { matchedData } = require('express-validator');
const {usersModel,PeliculasModel, castModel} = require('../models');
const {handlehttpError} = require('../utils/handlehttpError');

const MEDIA_PATH1 = `${__dirname}/../Profile_storage`;
const MEDIA_PATH2 = `${__dirname}/../Posters_storage`;
const MEDIA_PATH3 = `${__dirname}/../cast_storage`;

var fs = require('fs');


const updateUserImg = async (req, res) => {
    try{
        const {id, ...body} = matchedData(req);
        const {file} = req;

        const filedata = {
            filename: file.filename
        }
       
        const oldimgdata = await usersModel.findById(id);
        const {filename} = oldimgdata;
        const filepath = `${MEDIA_PATH1}/${filename}`

        if(filename != ""){
            fs.exists(`${filepath}`, (exists) => {
                exists 
                ?      
                fs.unlinkSync(filepath) 
                : 
                console.log('Not found!');
            });
        }

        console.log(id);
        console.log(filedata);
        console.log(file);

        const data = await usersModel.findOneAndUpdate({_id:id},filedata);
        res.send({data});
    }catch(e)
    {
        handlehttpError(res,"ERROR_UPDATE_ITEM")
    }
    

};

const updateMovieImg = async (req, res) => {
    try{
        const {id, ...body} = matchedData(req);
        const {file} = req;

        const filedata = {
            Portada: file.filename
        }
       
        const oldimgdata = await PeliculasModel.findById(id);
        const {Portada} = oldimgdata;
        const filepath = `${MEDIA_PATH2}/${Portada}`

        if(Portada != ""){
            fs.exists(`${filepath}`, (exists) => {
                exists 
                ?      
                fs.unlinkSync(filepath) 
                : 
                console.log('Not found!');
            });
        }

        console.log(id);
        console.log(filedata);

        const data = await PeliculasModel.findOneAndUpdate({_id:id},filedata);
        res.send({data});
    }catch(e)
    {
        handlehttpError(res,"ERROR_UPDATE_ITEM")
    }
    

};


const updateCastImg = async (req, res) => {
    try{
        const {id, ...body} = matchedData(req);
        const {file} = req;

        const filedata = {
            photo: file.filename
        }

        //console.log(filedata);

        const oldimgdata = await castModel.findById(id);
        const {photo} = oldimgdata;
        const filepath = `${MEDIA_PATH3}/${photo}`
        //console.log(oldimgdata);
        

        if(photo != ""){
            console.log(filepath);
            fs.exists(`${filepath}`, (exists) => {
                exists 
                ?      
                fs.unlinkSync(filepath) 
                : 
                console.log('Not found!');
            });
        }

        // console.log(photo);
        // console.log(id);
        // console.log(filedata);

        const data = await castModel.findOneAndUpdate({_id:id},filedata);
        res.send({data});
    }catch(e)
    {
        handlehttpError(res,"ERROR_UPDATE_ITEM")
    }
    

};

module.exports = {updateUserImg, updateMovieImg, updateCastImg};