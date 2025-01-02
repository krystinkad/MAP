import express from 'express';
import bcrypt, { compare, hash }  from 'bcrypt'; //https://www.npmjs.com/package/bcrypt

const filesRouter = express.Router();

import PrismaClient from '@prisma/client';

const dbClient = new PrismaClient.PrismaClient();

export default filesRouter;

filesRouter.post("/uploadFile", async (req, res) => {
    const { location, turnusYear } = req.body;
    try {
        await dbClient.turnus.create({
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