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

settingsRouter.get("/getTime", async(req,res) =>{
    try {
        const time = await dbClient.config.findFirst({
            where: {
                key: "startTime"
            }
        })
        res.status(200).json(time).end()
    } catch (error) {
        res.status(404).end();
    }   
})

settingsRouter.patch("/editTime", async (req, res) => {
    const { startTime } = req.body; // Destrukturalizace pouze startTime

    try {
        if (!startTime) {
            return res.status(400).json({ error: "startTime is required" });
        }

        await dbClient.config.update({
            where:{
                id: 1
            },
            data: {
                value: startTime 
            }
        });

        res.status(200).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while updating the data" });
    }
});
