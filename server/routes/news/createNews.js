import express from 'express';

const newsRouter = express.Router();

import PrismaClient from '@prisma/client';

const dbClient = new PrismaClient.PrismaClient();

export default newsRouter;

newsRouter.post("/createNews", async(req,res)=>{
    const {content, news_date} = req.body;
    await dbClient.news.create({
        data:{
            content: content,
            news_date: new Date(news_date)
        }
    })
    res.status(200)
})