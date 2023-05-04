const { matchedData } = require('express-validator');
const {usersModel} = require('../models')
const {handlehttpError} = require('../utils/handlehttpError')

const {tokenSing,verifytoken} = require('../utils/handlejwt')


const createItem = async (req, res) => {
    try{
     const body = matchedData(req);
     const dataUser = await usersModel.create(body);
     
     const data = {
        token: await tokenSing(dataUser),
        user:dataUser
     }

     res.send({data});
    }catch(e)
    {
        handlehttpError(res,"ERROR_CREATE_ITEM")
    }
    
};

const LoginT = async (req, res) => {
    try{
        const {email} = matchedData(req);
        const {password} = matchedData(req);
       
        const user = await usersModel.findOne({email:email , password:password});
        if(!user){
           handlehttpError(res, "USER_NOT_EXIST", 404)
           return
        }
        
        const data = {
            token: await tokenSing(user),
            user
        }

        
        //Soft Delete
        //const data = await editorialModel.delete({_id:id});
        res.send({data});
    }catch(e)
    {
        //console.log(e)
        handlehttpError(res,"ERROR_LOGIN")
    }
};

module.exports = {createItem,LoginT};