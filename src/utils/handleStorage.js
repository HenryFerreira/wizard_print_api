const multer = require("multer");



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const pathStorage = `${__dirname}/../storage`;//Se indica la ruta en donde se vana aguardar los archivos
        cb(null, pathStorage);//Se retorna el error y la ruta
    },
    filename: function (req, file, cb) {
        const ext = file.originalname.split(".").pop();//Se obtiene la extencion del archivo
        const filename = `file-${Date.now()}.${ext}`;//Se genera el nombre del archivo
        cb(null, filename);//Se retorna el error y la ruta
    }
});

const uploadMiddleware = multer({storage})

module.exports = uploadMiddleware;