import express from 'express';

const articlesRouter = express.Router();

import PrismaClient from '@prisma/client';

const dbClient = new PrismaClient.PrismaClient();

export default articlesRouter;

articlesRouter.post("/uploadArticle", async(req,res)=>{
    const {header, value} = req.body;
    dbClient.articles.create({
        data:{
            header: header.value,
            //editorData: editorData.value,
            //dayDate: day.value
        }
    })
})