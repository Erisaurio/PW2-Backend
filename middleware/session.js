const { handlehttpError } = require("../utils/handlehttpError");
const {verifytoken} = require('../utils/handlejwt')
// const {usersModel} = require("../models")


const authMiddleware = async (req,res, next) => {

    try{
        console.log(req.headers.authorization)
        if(!req.headers.authorization){
            handlehttpError(res, "NEED_SESSION", 401);
            return
        }

        const token = req.headers.authorization.split(' ').pop();
        //console.log(token)
        const dataToken = await verifytoken(token);

        if(!dataToken._id){
        handlehttpError(res, "ERROR_ID", 404)
        return
        }
        //console.log(dataToken.role)
        if(dataToken.role != "Admin"){
            console.log("no es admin")
            
            return handlehttpError(res, "NO_ADMIN_USER", 401)
        }

        // const user = await usersModel.findById(dataToken._id)
        // req.user = user
        
        next()

    }catch(e){
        handlehttpError(res, "NOT_SESSION", 401)
        
    }

}

module.exports = authMiddleware;