import express from 'express';
import bcrypt, { compare, hash }  from 'bcrypt'; //https://www.npmjs.com/package/bcrypt

const photosRouter = express.Router();

import PrismaClient from '@prisma/client';
import {upload} from '../../middleware/photos/uploadPhotos.js';
import {getPhotoData} from '../../middleware/photos/uploadPhotosData.js';

const dbClient = new PrismaClient.PrismaClient();

export default photosRouter;

photosRouter.post("/uploadPhotos/:id", getPhotoData, upload.array('photos', 150), async (req, res) => {
    const { articleId } = req.photoData;

    if (!req.files)
        return res.status(400).send("No photos were uploaded");

    const fileData = req.files.map((file) => ({
        photo_path: file.path,
        article_id: articleId
    }));

    try {
        await dbClient.photos.createMany({
            data: fileData,
          });
        res.status(200).end()
    } catch (error) {
        console.log(error);
        res.status(404).end();
    }
})