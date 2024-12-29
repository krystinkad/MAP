import express from 'express';

const articlesRouter = express.Router();

import PrismaClient from '@prisma/client';

const dbClient = new PrismaClient.PrismaClient();

export default articlesRouter;
articlesRouter.get("/getYears", async(req,res)=>{
    const yearsArray = await dbClient.turnus.findMany();
    res.status(200).json(yearsArray)
})

articlesRouter.post("/uploadArticle", async(req,res)=>{
    const {header, year_id, day} = req.body;
    await dbClient.articles.create({
        data:{
            header: header,
            year_id: year_id,
            day: day
        }
    })
    res.status(200).end()
})