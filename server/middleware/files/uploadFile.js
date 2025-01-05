import multer from 'multer';
import path from 'path';
import fs from 'fs';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const dest = path.join('uploads', 'files');
        cb(null, dest)
    },
    filename: async (req, file, cb) => {
        if (!req.params.name)
            return res.status(400).send('chybí jméno souboru');

        const fileName = req.params.name;
        cb(null, file.originalname);

    }
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = /docx|pdf|doc/i;
    const mimetype = allowedTypes.test(file.mimetype);
    const extname = allowedTypes.test(path.extname(file.originalname));

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only DOC, DOCX, and PDF are allowed.'));
    }
};

export const upload = multer({
    storage: storage,
    fileFilter: fileFilter
});