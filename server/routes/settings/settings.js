import express from 'express';
import bcrypt, { compare, hash }  from 'bcrypt'; //https://www.npmjs.com/package/bcrypt

const settingsRouter = express.Router();

import PrismaClient from '@prisma/client';

const dbClient = new PrismaClient.PrismaClient();

export default settingsRouter;

settingsRouter.post("/createTurnus", async (req, res) => {
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

settingsRouter.post("/createUser", async (req, res) => {
    const { name, password } = req.body;
    const passHash = await bcrypt.hash(password,10)
    try {
        await dbClient.users.create({
            data: {
                name: name,
                passHash: passHash
            }
        })
        res.status(200).end()
    } catch (error) {
        res.status(404).end();
    }
})