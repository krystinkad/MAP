import express from 'express';

const FEfilesRouter = express.Router();

import PrismaClient from '@prisma/client';
import fs from 'fs';

const dbClient = new PrismaClient.PrismaClient();

export default FEfilesRouter;

FEfilesRouter.get("/getFiles", async (req, res) => {
    try {
        const filesArray = await dbClient.files.findMany({
        })
        res.status(200).json(filesArray)
    } catch (error) {
        res.status(404).end();
    }
})


FEfilesRouter.get("/downloadFile/:filePath", async (req, res) => {
        const link = req.params.filePath; 
        const filePath = "//" + link
        console.log(":)")
console.log(filePath)
res.download(filePath, (err) => {
    if (err) {
        console.error('Error downloading the file:', err);
        res.status(500).send('Error downloading the file.');
    }
});
})