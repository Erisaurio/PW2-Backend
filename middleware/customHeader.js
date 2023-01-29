const customHeader = (req,res,next) => {
  try{
    const apiKey = req.headers.apiKey;
    if(apiKey === "Eri01"){
       next();
    } else{
        res.status(403)
        res.send({error: "API_KEY_NO_VALIDA"})
    }
  }catch(e){
     res.status(403)
     res.send({error: "Algo_ocurrio_custom_Header"})
  }
}

module.exports = customHeader;