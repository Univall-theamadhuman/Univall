const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");

    },
    filename: function (req, filem, cb) {
        const uniqueName = Date.now() + "-" + Math.round(Math.round() * 1e9);
        cb(null, uniqueName + path.extname(file.originalname));

    }
});

const upload = multer({
    storage: storage,
    limits: {fileSize: 5 * 1024 * 1024}
});

module.exports = upload;