const multer = require("multer");
/// cb callback
// storage es un midleware

const storage = multer.diskStorage({
  destination: function(req,file,cb){
     const pathStorage = `${__dirname}/../Storage`;
     cb(null, pathStorage);
  },
  filename: function(req, file, cb) { 
    const ext = file.originalname.split(".").pop();
    const filename = `file-${Date.now()}.${ext}`;
    cb(null, filename)
  }
});

const storageUser = multer.diskStorage({
  destination: function(req,file,cb){
     const pathStorage = `${__dirname}/../Profile_storage`;
     cb(null, pathStorage);
  },
  filename: function(req, file, cb) {
    const ext = file.originalname.split(".").pop();
    const filename = `file-${Date.now()}.${ext}`;
    cb(null, filename)
  }
});

const storageMovie = multer.diskStorage({
   destination: function(req,file,cb){
      const pathStorage = `${__dirname}/../Posters_storage`;
      cb(null, pathStorage);
   },
   filename: function(req, file, cb) {
     const ext = file.originalname.split(".").pop();
     const filename = `file-${Date.now()}.${ext}`;
     cb(null, filename)
   }
});

const storageCast = multer.diskStorage({
  destination: function(req,file,cb){
     const pathStorage = `${__dirname}/../cast_storage`;
     cb(null, pathStorage);
  },
  filename: function(req, file, cb) {
    const ext = file.originalname.split(".").pop();
    const filename = `file-${Date.now()}.${ext}`;
    cb(null, filename)
  }
});

const uploadMiddleware = multer({storage});
const uploadMiddlewareUserImg = multer({
  storage:storageUser});
const uploadMiddlewareMoveImg = multer({
  storage:storageMovie});
const uploadMiddlewareCastImg = multer({
  storage:storageCast});

module.exports = {uploadMiddleware,uploadMiddlewareUserImg,uploadMiddlewareMoveImg, uploadMiddlewareCastImg};