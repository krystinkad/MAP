import express from 'express';
import bcrypt, { compare, hash }  from 'bcrypt'; //https://www.npmjs.com/package/bcrypt

const photosRouter = express.Router();

import PrismaClient from '@prisma/client';

const dbClient = new PrismaClient.PrismaClient();

export default photosRouter;

photosRouter.post("/uploadPhotos", async (req, res) => {
    const { location, turnusYear } = req.body;
    try {
        await dbClient.photos.createMany({
            data: {
                location: location,
                turnusYear: turnusYear
            }
        })
        res.status(200).end()
    } catch (error) {
        res.status(404).end();
    }
})