import express from 'express';
import bcrypt, { compare, hash }  from 'bcrypt'; //https://www.npmjs.com/package/bcrypt

const photosRouter = express.Router();

import PrismaClient from '@prisma/client';
import {upload} from '../../middleware/photos/uploadPhotos.js';
import {getPhotoData} from '../../middleware/photos/uploadPhotosData.js';

const dbClient = new PrismaClient.PrismaClient();

export default photosRouter;

photosRouter.post("/uploadPhotos", getPhotoData, upload, async (req, res) => {
    const { articleId } = req.body;

    try {
        const fileData = req.files.map((file) => {
            return {
              photo_path: file.path,
              article_id: articleId
            }
        });
        await dbClient.photos.createMany({
            data: fileData,
          });
        res.status(200).end()
    } catch (error) {
        res.status(404).end();
    }
})