import express from 'express';

const messagesRouter = express.Router();

import PrismaClient from '@prisma/client';

const dbClient = new PrismaClient.PrismaClient();

export default messagesRouter;
messagesRouter.get("/getMessages", async (req, res) => {
    try {
        const messagesArray = await dbClient.messages.findMany();
        res.status(200).json(messagesArray)
    } catch (error) {
        res.status(404).end();
    }
})


messagesRouter.post("/sendMessage", async (req, res) => {
    const { childName, messageContent } = req.body;
    try {
        await dbClient.messages.create({
            data: {
                childName: childName,
                content: messageContent,
                postedDate: new Date()
            }
        })
        res.status(200).end()
    } catch (error) {
        res.status(404).end();
    }

})

messagesRouter.delete("/deleteMessage", async (req, res) => {
    const { message_id } = req.body;
    try {
        await dbClient.messages.delete({
            where:{
                id: message_id
            }
        })
        res.status(200).end()
    } catch (error) {
        res.status(404).end();
    }

})

messagesRouter.delete("/deleteAllMessages", async (req, res) => {
    try {
        await dbClient.messages.deleteMany({})
        res.status(200).end()
    } catch (error) {
        res.status(404).end();
    }

})