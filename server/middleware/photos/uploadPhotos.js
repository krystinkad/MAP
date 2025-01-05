import multer from 'multer';
import path from 'path';
import fs from 'fs';
import ShortUniqueId from 'short-unique-id';
const uid = new ShortUniqueId({ length: 10 });

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const { year, day } = req.photoData;

        const dest = path.join('uploads', 'photos', year.toString(), day.toString());
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest, { recursive: true });
        }
        cb(null, dest)
    },
    filename: async (req, file, cb) => {
        const { year, day } = req.photoData;

        if (fs.existsSync(path.join('uploads', 'photos', year.toString(), day.toString(), file.originalname))) {
            return cb(new Error('This file is already uploaded'), false);
        }
        else {
          req.filename = file.originalname + uid.rnd();
          cb(null, req.filename);
        }
    }
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|CR2|ARW/i;
    const mimetype = allowedTypes.test(file.mimetype);
    const extname = allowedTypes.test(path.extname(file.originalname));

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only JPEG, JPG, and PNG are allowed.'));
    }
};

export const upload = multer({
    storage: storage,
    fileFilter: fileFilter
  });