import express from 'express';

const articlesRouter = express.Router();

import PrismaClient from '@prisma/client';

const dbClient = new PrismaClient.PrismaClient();

export default articlesRouter;
articlesRouter.get("/getYears", async (req, res) => {
    try {
        const yearsArray = await dbClient.turnus.findMany();
        res.status(200).json(yearsArray)
    } catch (error) {
        res.status(404).end();  
    }
})

articlesRouter.get("/getArticles/:year", async (req, res) => {
    const year_id = Number(req.params.year)
    try {
        const articlesArray = await dbClient.articles.findMany({
            where: {
                year_id: year_id
            }
        })
        res.status(200).json(articlesArray)
    } catch (error) {
        res.status(404).end();
    }
})

articlesRouter.get("/getArticleContent/:article_id", async (req, res) => {
    const article_id = Number(req.params.article_id)
    try {
        const articleContent = await dbClient.articles.findFirst({
            where: {
                id: article_id
            }
        })
        //console.log(articleContent)
        res.status(200).json(articleContent)
    } catch (error) {
        res.status(404).end();
    }
})

articlesRouter.post("/uploadArticle", async (req, res) => {
    const { header, year_id, day, content } = req.body;
    try {
        await dbClient.articles.create({
            data: {
                header: header,
                year_id: year_id,
                day: day,
                content: content
            }
        })
        res.status(200).end()
    } catch (error) {
        res.status(404).end();
    }
    
})

articlesRouter.patch("/editArticle", async (req, res) => {
    const { id, header, year_id, day, content } = req.body;
    //console.log( id, header, year_id, day, content)
    try {
        await dbClient.articles.update({
            where:{
                id: Number(id)
            },
            data: {
                header: header,
                year_id: year_id,
                day: day,
                content: content
            }
        })
        res.status(200).end()
    } catch (error) {
        console.log(error)
        res.status(404).end();
    }
})

articlesRouter.delete("/deleteArticle", async(req,res)=>{
    const {delete_id} = req.body;
    try {
        await dbClient.articles.delete({
            where:{
                id: delete_id
            }
        })

        res.status(200).end();
    } catch (error) {
        res.status(404).end();t
    }
})