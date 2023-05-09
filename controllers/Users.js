const { matchedData } = require('express-validator');
const {usersModel} = require('../models')
const {handlehttpError} = require('../utils/handlehttpError')

const MEDIA_PATH1 = `${__dirname}/../Profile_storage`;

var fs = require('fs');

const getAllUser = async (req, res) => {
    try{
        const data = await usersModel.find({});

        res.send({ data });
    }catch(e)
    {
        handlehttpError(res,"ERROR_GET_ALL_ITEMS")
    }
    
};

const getAllAdmin = async (req, res) => {
    try{
        const data = await usersModel.find({role:"Admin"});

        res.send({ data });
    }catch(e)
    {
        handlehttpError(res,"ERROR_GET_ALL_ITEMS")
    }
    
};

const getUser = async (req, res) => {
    try{
      req = matchedData(req);
      const {id} = req;
      const data = await usersModel.findById(id);
      res.send({ data });
    } catch(e){
       handlehttpError(res,"ERROR_GET_ITEM")
    }
};

const createUser = async (req, res) => {
    try{
        const body = matchedData(req);
        //console.log(body);
        const data = await usersModel.create(body);
        res.send({data});
    }catch(e)
    {
        handlehttpError(res,"ERROR_CREATE_ITEM")
    }
    
};

const UpdateUser = async (req, res) => {
    try{
       
        const {id, ...body} = matchedData(req);
        //console.log(body);
        const data = await usersModel.findOneAndUpdate({_id:id},body);
        res.send({data});
    }catch(e)
    {
        handlehttpError(res,"ERROR_UPDATE_ITEM")
    }
};

const DeleteUser = async (req, res) => {
    try{
        req = matchedData(req);
        const {id} = req;

       
        const oldimgdata = await usersModel.findById(id);
        const {filename} = oldimgdata;
        const filepath = `${MEDIA_PATH1}/${filename}`

        if(filename != ""){
            console.log("if");
            fs.exists(`${filepath}`, (exists) => {
                exists 
                ?      
                fs.unlinkSync(filepath) 
                : 
                console.log('Not found!');
            });
        }

        // Delete normal exprees
        const data = await usersModel.deleteOne({_id:id});

        //Soft Delete
        //const data = await editorialModel.delete({_id:id});
        res.send({data});
    }catch(e)
    {
        handlehttpError(res,"ERROR_DELETE_ITEM")
    }
};

const Login = async (req, res) => {
    try{
        const {email} = matchedData(req);
        const {password} = matchedData(req);
        // Delete normal exprees
        const data = await usersModel.findOne({email:email , password:password});
        //Soft Delete
        //const data = await editorialModel.delete({_id:id});
        res.send({data});
    }catch(e)
    {
        handlehttpError(res,"ERROR_LOGIN")
    }
};

const getAllUser1a1 = async (req, res) => {
    try{
        const data = await usersModel.aggregate(
            [
               {
                   $lookup:
                   {
                       from: "editorials",
                       localField:"editorial",
                       foreignField:"_id",
                       as: "Editorial"
                   }
               }
           ]
        )
           console.log(data);

        res.send({ data });
    }catch(e)
    {
        handlehttpError(res,"ERROR_GET_ALL_ITEMS")
    }
    
};

const Login1a1 = async (req, res) => {
    try{
        const {email} = matchedData(req);
        const {password} = matchedData(req);
        const data = await usersModel.aggregate(
            [
               {
                   $lookup:
                   {
                       from: "editorials",
                       localField:"editorial",
                       foreignField:"_id",
                       as: "EditorialUsuario"
                   },
               },
               {
                  $unwind: "$EditorialUsuario"
               },
               {
                  $match: { email: email }
               }
           ]
        )
           console.log(data);

        res.send({ data });
    }catch(e)
    {
        handlehttpError(res,"ERROR_LOGIN")
    }
};

module.exports = {getAllUser, getUser, createUser, 
    UpdateUser, DeleteUser , Login, getAllUser1a1, Login1a1, getAllAdmin};