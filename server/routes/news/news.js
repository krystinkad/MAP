import express from 'express';

const newsRouter = express.Router();

import PrismaClient from '@prisma/client';

const dbClient = new PrismaClient.PrismaClient();

export default newsRouter;

newsRouter.post("/createNews", async (req, res) => {
    const { content, news_date } = req.body;
    try {
        await dbClient.news.create({
            data: {
                content: content,
                news_date: new Date(news_date)
            }
        })
        res.status(200).end()
    } catch (error) {
        res.status(404).end();
    }
})

newsRouter.get("/getNews", async (req, res) => {
    const newsArray = await dbClient.news.findMany();
    res.status(200).json(newsArray)
})

newsRouter.delete("/deleteNews", async (req, res) => {
    const { delete_id } = req.body;
    try {
        await dbClient.news.delete({
            where: {
                id: delete_id
            }
        })

        res.status(200).end();
    } catch (error) {
        res.status(404).end();
    }
})