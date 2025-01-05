import express from 'express';
import bcrypt, { compare, hash }  from 'bcrypt'; //https://www.npmjs.com/package/bcrypt

const filesRouter = express.Router();

import PrismaClient from '@prisma/client';
import {upload} from '../../middleware/files/uploadFile.js';
import {deleteFileFromDisk} from '../../middleware/files/deleteFile.js';


const dbClient = new PrismaClient.PrismaClient();

export default filesRouter;

filesRouter.post("/uploadFile/:name", upload.single('file'), async (req, res) => {
    if (!req.file)
        return res.status(400).send("No files were uploaded");
    console.log(req.params.name)
    const fileData = {
        displayName: req.params.name,
        filePath: req.file.path
    };

    try {
        await dbClient.files.create({
            data: fileData,
          });
        res.status(200).end()
    } catch (error) {
        console.log(error);
        res.status(404).end();
    }
})

filesRouter.get("/getFiles", async (req, res) => {
    try {
        const filesArray = await dbClient.files.findMany({

        })
        res.status(200).json(filesArray)
    } catch (error) {
        res.status(404).end();
    }
})

filesRouter.delete("/deleteFile", deleteFileFromDisk, async(req,res)=>{
    const {file_id} = req.body;
    console.log(file_id)
    try {
        await dbClient.files.delete({
            where:{
                id: file_id
            }
        })
        res.status(200).end();
    } catch (error) {
        res.status(404).end();
    }
})