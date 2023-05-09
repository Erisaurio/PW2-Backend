const mongoose = require("mongoose");

const dbConnect = () => {
  //const DB_URI = process.env.DB_URI; mongodb+srv://Erisaurio:KCysmn7Q44pg0d16@cluster0.ure0smm.mongodb.net/?retryWrites=true&w=majority
  
  const DB_URI = 'mongodb+srv://Erisaurio:KCysmn7Q44pg0d16@cluster0.ure0smm.mongodb.net/?retryWrites=true&w=majority'
  //const DB_URI = 'mongodb://0.0.0.0:27017/TestPw2'
  mongoose.connect(
      DB_URI, 
      {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      }, (err, reso) => {
        if(!err){
            console.log("*** CONEXION CORRECTA ***")
        }
        else{
            console.log("*** ERROR DE CONEXION ***")
            console.log(err)
        }
  });
};

module.exports = dbConnect;