const multer = require("multer");
/// cb callback
// storage es un midleware

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const pathStorage = `${__dirname}/../storage`;
      cb(null, pathStorage);
    },
    filename: function(req, file, cb) {            //       shift, pop
      const ext = file.originalname.split(".").pop(); // --> ["name", "png"]
      const filename = `file-${Date.now()}.${ext}`;
      cb(null, filename);
    }
  });
  
  const uploadMiddleware = multer({storage});