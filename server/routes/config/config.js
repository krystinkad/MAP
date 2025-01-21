import express from 'express';

const configRouter = express.Router();

import PrismaClient from '@prisma/client';

const dbClient = new PrismaClient.PrismaClient();

export default configRouter;

configRouter.get("/getTime", async (req, res) => {
  try {
    const times = await dbClient.config.findMany({
      where: {
        key: "startTime",
      },
    });

    if (!times || times.length === 0) {
      return res.status(404).json({ error: "No times found" });
    }

    const timeValues = times.map((time) => time.value); 
    res.status(200).json(timeValues);
  } catch (error) {
    console.error("Error fetching time:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});